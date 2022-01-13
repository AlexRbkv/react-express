const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(request, result) {
        const {name} = request.body
        const brand = await Brand.create({name})
        return result.json(brand)
    }

    async getAll(request, result) {
        const brands = await Brand.findAll()
        return result.json(brands)
    }

}

module.exports = new BrandController()
