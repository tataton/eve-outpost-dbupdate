const Sequelize = require('sequelize');
const config = require('../config');

const sequelizeLocal = new Sequelize({
    database: config.LOCAL_DB_NAME,
    username: config.LOCAL_DB_USERNAME,
    password: config.LOCAL_DB_PASSWORD,
    host: config.LOCAL_DB_HOST,
    port: config.LOCAL_DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false
});

module.exports = sequelizeLocal;