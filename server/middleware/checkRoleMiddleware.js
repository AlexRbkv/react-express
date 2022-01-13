const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function (request, result, next) {
        if (request.method === "OPTIONS") {
            next()
        }
        try {
            const token = request.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return result.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return result.status(403).json({message: "Нет доступа"})
            }
            request.user = decoded;
            next()
        } catch (event) {
            result.status(401).json({message: "Не авторизован"})
        }
    };
}



