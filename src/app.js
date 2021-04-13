const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');

const app = express();

app.use(cors());
app.disable('x-powered-by');
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);

module.exports = app;
