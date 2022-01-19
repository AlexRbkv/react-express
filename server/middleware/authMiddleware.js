const jwt = require('jsonwebtoken')

module.exports = function (request, result, next) {
    if (request.method === "OPTIONS") {
        next();
    }
    try {
        const token = request.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk
        if (!token) {
            return result.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        request.user = decoded;
        next();
    } catch (event) {
        result.status(401).json({message: "Не авторизован"})
    }
};
