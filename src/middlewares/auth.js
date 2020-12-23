const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (!token) {
        return res.status(401).json({
            success: false,
            msg: 'Invalid token.'
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: 'Invalid token.'
            });
        }
        req.decoded = decoded;
        return next();
    });
}

module.exports = { checkToken }