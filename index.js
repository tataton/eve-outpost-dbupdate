const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const DB = require('./services/service-database');

DB.LocalInvType.findAll({
    where: {
        [Op.and]:{
            typeID: {
                [Op.lt]: 100
            },
            marketGroupID: {
                [Op.not]: null
            }
        }

    }
}).then(types => {
    console.log(types);
});