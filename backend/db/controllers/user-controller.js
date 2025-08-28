const {validationResult} = require("express-validator");
const db = require("../db");
const bcrypt = require("bcryptjs");
const {User} = require('../models/models')
const tokenService = require('../service/tokenService')

const userDTO = require('../dto/userDTO')

class userController {

    async registration(req, res) {
        try {
            const errors = validationResult(req)
            console.log(validationResult(req))
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'registration error 1: ', errors})
            }
            const {username, email, password} = req.body
            const image = 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'
            const candidate = await User.findOne({where: {email}})

            const arr = candidate.rows;
            if (arr.length !== 0) {
                console.log(arr)
                return res.status(400).json({message: 'registration error: a user with this EMAIL already exists'})
            }

            const hashPassword = bcrypt.hashSync(password, 6);

            const newPerson = await User.create({username, email, password: hashPassword, status: 1, image})

            const userDTO1 = new userDTO(username, email)
            const tokens = tokenService.generateTokens({...userDTO1})

            await tokenService.saveToken(userDTO1.email, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            console.log("User был успешно зарегестрирован")
            return res.json({...tokens, user: userDTO1})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'registration error: ' + e})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({where: {email}})

            if (!user) {
                return res.status(400).json({message: 'login error: a user with this EMAiL is not exists'})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'login error: PASSWORD is not valid'})
            }
            const userDTO1 = new userDTO(user.username, user.email)
            const tokens = tokenService.generateTokens({...userDTO1})

            await tokenService.saveToken(userDTO1.email, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log("User успешно вошел")
            return res.json({...tokens, user: userDTO1})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'login error: ' + e})
        }
    }

    async logout(req, res) {
        try {
            const {refreshToken} = req.cookies;

            const token = await tokenService.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'logout error: ' + e})

        }
    }

    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                res.status(401).json({message: 'Unauthorized'})
            }

            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDB = await tokenService.findToken(refreshToken)
            if (!userData || !tokenFromDB) {
                res.status(401).json({message: 'Unauthorized'})
            }
            const candidate = await db.query(
                'SELECT * FROM users WHERE email = $1', [userData.email])
            const arr = candidate.rows[0];

            const userDTO1 = new userDTO(arr.username, arr.email)
            const tokens = tokenService.generateTokens({...userDTO1})

            await tokenService.saveToken(userDTO1.email, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log("token refreshed")
            return res.json({...tokens, user: userDTO1})

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'refresh error: ' + e})
        }
    }

    // async getUsers(req, res) {
    //     try {
    //
    //         return res.json(['123', "222"])
    //     } catch (e) {
    //         console.log(e)
    //
    //         res.status(400).json({message: 'error: ' + e})
    //     }
    // }

}

module.exports = new userController();