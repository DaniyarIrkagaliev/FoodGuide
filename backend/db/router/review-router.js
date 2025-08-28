const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router()

const {body} = require('express-validator')


router.post("/login", userController.login)
router.post("/logout", userController.logout)


module.exports = router