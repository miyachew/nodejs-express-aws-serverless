const express = require('express');
const { signToken } = require("../utils/sign-token");

const routes = express.Router({
    mergeParams: true
});

routes.post('/login', (req, res) => {
    if (req.body.userId) {
        return res.status(200).json(signToken(req.body.userId));
    } else {
        return res.status(422).json({
            success: false,
            msg: 'Missing userId.'
        });
    }
});

module.exports = { routes };