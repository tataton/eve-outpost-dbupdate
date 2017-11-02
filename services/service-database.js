const invTypeSchema = require('../schemas/schema-invtype');
const invMarketGroupSchema = require('../schemas/schema-invmarket');

const localDB = require('../modules/module-sequelize-local');
const remoteDB = require('../modules/module-sequelize-remote');

module.exports = {
    LocalInvType: localDB.define('invType', invTypeSchema, {timestamps: false}),
    RemoteInvType: remoteDB.define('invType', invTypeSchema),
    LocalInvMarketGroup: localDB.define('invMarketGroup', invMarketGroupSchema, {timestamps: false}),
    RemoteInvMarketGroup: remoteDB.define('invMarketGroup', invMarketGroupSchema)
};