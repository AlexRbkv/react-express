const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(request, result) {
        const {name} = request.body
        const type = await Type.create({name})
        return result.json(type)
    }

    async getAll(request, result) {
        const types = await Type.findAll()
        return result.json(types)
    }

}

module.exports = new TypeController()
