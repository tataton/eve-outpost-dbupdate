const invTypeSchema = require('../schemas/schema-invtype');
const invMarketGroupSchema = require('../schemas/schema-invmarket');
const mapSolarSystemSchema = require('../schemas/schema-mapsolarsystem');
const mapRegionSchema = require('../schemas/schema-mapregion');
const staStationSchema = require('../schemas/schema-stastation');
const publicStructureSchema = require('../schemas/schema-publicstructure');
const privateStructureSchema = require('../schemas/schema-privatestructure');
const userToStructureSchema = require('../schemas/schema-usertostructure');
const pubMarketOrderSchema = require('../schemas/schema-pubmarketorder');
const userSchema = require('../schemas/schema-user');

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
    LocalStaStation: localDB.define('staStation', staStationSchema, {timestamps: false}),
    RemoteStaStation: remoteDB.define('staStation', staStationSchema, {timestamps: false}),
    RemotePublicStructure: remoteDB.define('publicStructure', publicStructureSchema),
    RemotePrivateStructure: remoteDB.define('privateStructure', privateStructureSchema),
    RemoteUserToStructure: remoteDB.define('userToStructure', userToStructureSchema),
    RemotePubMarketOrder: remoteDB.define('pubMarketOrder', pubMarketOrderSchema),
    RemoteUser: remoteDB.define('user', userSchema)
};