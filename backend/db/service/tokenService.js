const jwt = require('jsonwebtoken');
const db = require("../db");
const {Tokens} = require("../models/models");

class TokenService {

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {
            accessToken, refreshToken
        }
    }

    async saveToken(email, refreshToken) {
        const tokenData = await Tokens.findOne({where: {email}})

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
        }

        const token = await Tokens.create({email, refreshToken})
    }

    async removeToken(refreshToken) {
        const tokenData = await db.query(
            'DELETE FROM tokens WHERE "refreshToken" = $1', [refreshToken])
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Tokens.findOne({where: {refreshToken}})
        return tokenData;
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData;
        } catch (e) {
            return null;
        }
    }
}

module.exports = new TokenService();