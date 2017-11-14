const Sequelize = require('sequelize');
const DB = require('./services/service-database');

Promise.all([
    DB.RemoteMapRegion.sync()
        .then(model => model.destroy({where: {}})),
    DB.RemoteInvMarketGroup.sync()
        .then(model => model.destroy({where: {}})),
    DB.RemoteInvType.sync()
        .then(model => model.destroy({where: {}})),
    DB.RemoteMapSolarSystem.sync()
        .then(model => model.destroy({where: {}}))    
])
.catch((error) => {
    console.log("error message:" + error)
});