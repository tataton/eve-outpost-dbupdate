const invTypeSchema = require('../schemas/schema-invtype');
const invMarketGroupSchema = require('../schemas/schema-invmarket');
const mapSolarSystemSchema = require('../schemas/schema-mapsolarsystem');
const mapRegionSchema = require('../schemas/schema-mapregion');

const localDB = require('../modules/module-sequelize-local');
const remoteDB = require('../modules/module-sequelize-remote');

module.exports = {
    LocalInvType: localDB.define('invType', invTypeSchema, {timestamps: false}),
    RemoteInvType: remoteDB.define('invType', invTypeSchema, {timestamps: false}),
    LocalInvMarketGroup: localDB.define('invMarketGroup', invMarketGroupSchema, {timestamps: false}),
    RemoteInvMarketGroup: remoteDB.define('invMarketGroup', invMarketGroupSchema, {timestamps: false}),
    LocalMapSolarSystem: localDB.define('mapSolarSystem', mapSolarSystemSchema, {timestamps: false}),
    RemoteMapSolarSystem: remoteDB.define('mapSolarSystem', mapSolarSystemSchema, {timestamps: false}),
    LocalMapRegion: localDB.define('mapRegion', mapRegionSchema, {timestamps: false}),
    RemoteMapRegion: remoteDB.define('mapRegion', mapRegionSchema, {timestamps: false}),
    localClose () {
        localDB.close();
    },
    remoteClose () {
        remoteDB.close();
    }
};