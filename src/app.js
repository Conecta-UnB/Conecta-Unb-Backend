const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');
const forumRoutes = require('./routes/forum');
const comentarioRoutes = require('./routes/comentario');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.disable('x-powered-by');
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/comentario', comentarioRoutes);

module.exports = app;
