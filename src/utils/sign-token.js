const jwt = require("jsonwebtoken");

const signToken = (id) => {
    return jwt.sign({ id, iat: Date.now() }, process.env.JWT_SECRET);
}

module.exports = {
    signToken,
};