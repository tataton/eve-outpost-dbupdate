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
        .then(model => model.destroy({where: {}})),
    DB.RemoteStaStation.sync()
        .then(model => model.destroy({where: {}})),
    DB.RemotePublicStructure.sync(),
    DB.RemotePrivateStructure.sync(),
    DB.RemoteUserToStructure.sync(),
    DB.RemotePubMarketOrder.sync(),
    DB.RemoteUser.sync()
])
.catch((error) => {
    console.log("error message:" + error)
});