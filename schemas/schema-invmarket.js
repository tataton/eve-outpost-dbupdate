const Sequelize = require('sequelize');

const invMarketGroupSchema = {
    marketGroupID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    parentGroupID: {
        type: Sequelize.INTEGER
    },
    marketGroupName: {
        type: Sequelize.STRING(100)
    },
    iconID: {
        type: Sequelize.INTEGER
    }
};

module.exports = invMarketGroupSchema;