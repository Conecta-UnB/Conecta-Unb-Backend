require('dotenv/config');
const application = require('./app');
const config = require('./config/config');

console.log(config.production);
application.listen(3333);
