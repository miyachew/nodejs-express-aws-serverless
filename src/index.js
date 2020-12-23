const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { checkToken } = require('./middlewares/auth');
require('dotenv').config();


const { routes: userRoutes } = require('./routes/users');
const { routes: authRoutes } = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use(checkToken);
app.use('/users', userRoutes);

// for testing in local
// app.listen(3000);

module.exports = app;