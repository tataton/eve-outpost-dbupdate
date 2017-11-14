const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const DB = require('./services/service-database');

Promise.all([

    DB.LocalMapRegion.findAll({
        where: {
            [Op.and]: [
                {regionID: {[Op.ne]: 10000004}},
                {regionID: {[Op.ne]: 10000017}},
                {regionID: {[Op.ne]: 10000019}},
                {regionID: {[Op.lt]: 11000000}}
            ]
        }
    })
    .then(regions => {
        const remoteRegionArray = regions.map(region => {
            return region.get()
        });
        return DB.RemoteMapRegion.bulkCreate(remoteRegionArray)
    }),

    DB.LocalInvMarketGroup.findAll()
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
    }).then(types => {
        const remoteTypeArray = types.map(type => {
            return type.get()
        });
        return DB.RemoteInvType.bulkCreate(remoteTypeArray)
    }),

    DB.LocalMapSolarSystem.findAll({
        where: {
            [Op.and]: [
                {regionID: {[Op.ne]: 10000004}},
                {regionID: {[Op.ne]: 10000017}},
                {regionID: {[Op.ne]: 10000019}},
                {regionID: {[Op.lt]: 11000000}}
            ]
        }
    })
    .then(solarsystems => {
        const remoteSolarSystemArray = solarsystems.map(solarsystem => {
            return solarsystem.get()
        });
        return DB.RemoteMapSolarSystem.bulkCreate(remoteSolarSystemArray)
    })

])

.catch((error) => {
    console.log("error message:" + error)
});