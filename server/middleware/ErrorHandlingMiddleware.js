const ApiError = require('../error/ApiError');

module.exports = function (error, request, result, next) {
    if (error instanceof ApiError) {
        return result.status(error.status).json({message: error.message})
    }
    return result.status(500).json({message: "Непредвиденная ошибка!"})
}
