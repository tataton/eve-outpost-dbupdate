const Sequelize = require('sequelize');
const DB = require('./services/service-database');

// Thenable delay; delay(ms) accepts the result of a promise,
// waits for the indicated time in ms, and then passes the accepted
// result to the next promise (if necessary).
const delay = (ms) => (passedArg => {
    return new Promise(resolve => setTimeout(
        () => resolve(passedArg), ms
    ));
});

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
    DB.RemoteUser.sync()
])
.catch((error) => {
    console.log("error message:" + error)
});