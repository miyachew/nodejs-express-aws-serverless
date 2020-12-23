const express = require('express');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    return res.status(200).json([]);
});

module.exports = { routes };