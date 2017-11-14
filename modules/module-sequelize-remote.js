const Sequelize = require('sequelize');
const config = require('../config');

const sequelizeRemote = new Sequelize({
    database: config.REMOTE_DB_NAME,
    username: config.REMOTE_DB_USERNAME,
    password: config.REMOTE_DB_PASSWORD,
    host: config.REMOTE_DB_HOST,
    port: config.REMOTE_DB_PORT,
    dialect: 'postgres',
    pool: {max: 20},
    operatorsAliases: false,
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelizeRemote;