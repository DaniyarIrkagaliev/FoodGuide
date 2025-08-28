const tokenService = require('../service/tokenService')

module.exports = function (req, res) {
    try {

        const authHeader = req.header.authorization;
        if (!authHeader) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        const accessToken = authHeader.split(' ')[1]
        if (!accessToken) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        req.user = userData;

    } catch (e) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}