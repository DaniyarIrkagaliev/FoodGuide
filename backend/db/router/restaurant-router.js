const Router = require('express').Router;
const restaurantController = require('../controllers/restaurant-controller');
const router = new Router()


router.get("/restaurants", restaurantController.getAll)
router.get("/restaurants2", restaurantController.getAll2)
router.get("/restaurant", restaurantController.getOne)

module.exports = router