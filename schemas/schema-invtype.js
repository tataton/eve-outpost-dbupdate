const Sequelize = require('sequelize');

const invTypeSchema = {
    typeID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    typeName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    marketGroupID: {
        type: Sequelize.INTEGER
    },
    iconID: {
        type: Sequelize.INTEGER
    }
};

module.exports = invTypeSchema;

