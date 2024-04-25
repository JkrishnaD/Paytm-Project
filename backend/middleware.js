const jwt = require('jsonwebtoken');

const jwt_secret = require('./config');

function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(403).json({msg : "Header"})
    }

    const token = authHeader

    try {
        const decode = jwt.verify(token, jwt_secret)
        if (decode.userId) {
            req.userId = decode.userId
            next()
        }
    } catch (err) {
        return res.status(403).json({
            msg: err
        })
    }
}

module.exports = {
    authMiddleware
}