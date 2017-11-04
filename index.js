const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const DB = require('./services/service-database');

Promise.all([
    DB.RemoteMapRegion.destroy({where: {}})
    .then(
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
            DB.RemoteMapRegion.bulkCreate(remoteRegionArray)
        })
    ),
    DB.RemoteInvMarketGroup.destroy({where: {}})
    .then(
        DB.LocalInvMarketGroup.findAll()
        .then(groups => {
            const remoteGroupArray = groups.map(group => {
                return group.get()
            });
            DB.RemoteInvMarketGroup.bulkCreate(remoteGroupArray)
        })
    ),
    DB.RemoteInvType.destroy({where: {}})
    .then(
        DB.LocalInvType.findAll({
            where: {
                marketGroupID: {[Op.ne]: null}
            }
        }).then(types => {
            const remoteTypeArray = types.map(type => {
                return type.get()
            });
            DB.RemoteInvType.bulkCreate(remoteTypeArray)
        })
    ),
    DB.RemoteMapSolarSystem.destroy({where: {}})
    .then(
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
            DB.RemoteMapSolarSystem.bulkCreate(remoteSolarSystemArray)
        })
    )
])
.then(() => {
/*
    DB.localClose();
    DB.remoteClose();

    Intended to allow node.js to exit gracefully. Currently having
    trouble making this happen without throwing a connection error--
    Sequelize says connection is being closed *before* database has
    finished making changes.
*/
})
.catch((error) => {
    console.log("error message:" + error)
});