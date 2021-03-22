const express = require('express');

const userRoutes = require('./routes/user');

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.use('/api/user', userRoutes);

module.exports = app;
