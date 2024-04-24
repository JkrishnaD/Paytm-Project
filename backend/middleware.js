const jwt = require('jsonwebtoken');

const jwt_secret = require('./config');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(403).json({})
    }

    const token = authHeader.split('')[1];

    try {
        const decode = jwt.verify(token, jwt_secret)
        if (decode.userId) {
            req.userId = decode.userId
            next()
        }
    } catch (err) {
        return res.status(403).json({
            msg: "UnAuthorized"
        })
    }
}

module.exports = {
    authMiddleware
}