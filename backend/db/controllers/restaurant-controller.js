const {Restaurant} = require('../models/models')

class restaurantController {

    async getAll(req, res) {

        // let {brandId, typeId, limit, page} = req.query
        let {limit, page} = req.query

        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let restaurants;

        // restaurants = await Restaurant.findAll()
        restaurants = await Restaurant.findAndCountAll({limit, offset})

        // if (!brandId && !typeId) {
        //     restaurants = await Restaurant.findAndCountAll({limit, offset})
        // }
        // if (brandId && !typeId) {
        //     restaurants = await Device.findAndCountAll({where:{brandId}, limit, offset})
        // }
        // if (!brandId && typeId) {
        //     restaurants = await Device.findAndCountAll({where:{typeId}, limit, offset})
        // }
        // if (brandId && typeId) {
        //     restaurants = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        // }
        return res.json(restaurants)
    }

    async getAll2(req, res) {

        let restaurants;
        restaurants = await Restaurant.findAll()
        return res.json(restaurants)
    }

    async getOne(req, res) {
        const {rest_id} = req.params
        const restaurants = await Restaurant.findOne(
            {
                where: {rest_id},

            },
        )
        return res.json(restaurants)
    }

}

module.exports = new restaurantController();