const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

    DB.LocalMapRegion.findAll()
    .then(delay(1000))
    .then(regions => {
        const remoteRegionArray = regions.map(region => {
            return region.get()
        });
        return DB.RemoteMapRegion.bulkCreate(remoteRegionArray)
    }),

    DB.LocalInvMarketGroup.findAll()
    .then(delay(1000))
    .then(groups => {
        const remoteGroupArray = groups.map(group => {
            return group.get()
        });
        return DB.RemoteInvMarketGroup.bulkCreate(remoteGroupArray)
    }),

    DB.LocalInvType.findAll({
        where: {
            marketGroupID: {[Op.ne]: null}
        }
    })
    .then(delay(1000))
    .then(types => {
        const remoteTypeArray = types.map(type => {
            return type.get()
        });
        return DB.RemoteInvType.bulkCreate(remoteTypeArray)
    }),

    DB.LocalMapSolarSystem.findAll()
    .then(delay(1000))
    .then(solarsystems => {
        const remoteSolarSystemArray = solarsystems.map(solarsystem => {
            return solarsystem.get()
        });
        return DB.RemoteMapSolarSystem.bulkCreate(remoteSolarSystemArray)
    }),

    DB.LocalStaStation.findAll()
    .then(delay(1000))
    .then(stations => {
        const remoteStationArray = stations.map(station => {
            return station.get()
        });
        return DB.RemoteStaStation.bulkCreate(remoteStationArray)
    })

])

.catch((error) => {
    console.log("error message:" + error)
});