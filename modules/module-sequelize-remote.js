const Sequelize = require('sequelize');
const config = require('../config');

const sequelizeObject = {
    database: config.REMOTE_DB_NAME,
    username: config.REMOTE_DB_USERNAME,
    password: config.REMOTE_DB_PASSWORD,
    host: config.REMOTE_DB_HOST,
    port: config.REMOTE_DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false
};

if (config.REMOTE_DB_HOST !== 'localhost') {
    sequelizeObject.dialectOptions = {ssl: true}
}

const sequelizeRemote = new Sequelize(sequelizeObject);

module.exports = sequelizeRemote;