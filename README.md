# eve-outpost-dbupdate

This tool duplicates and simplifies data from a local, downloaded copy of CCP's SDE into a remotely hosted database. The remote database is then used as a data source for eve-outpost.

CCP publishes its SDE data in YAML format. This data is then converted into a variety of database formats by Steve Ronuken. This tool specifically requires Steve's PostgreSQL dumpfile (.dmp) conversion, downloaded locally, as a starting point. You will need to have a PostgreSQL service running on your local machine to use this tool. Using the pg command-line tools, run
```
pg_restore -c -d *newDBname* *downloadedfile.dmp*
```
in your terminal to create a local database. Then, add local and remote database information to `config.js` (as illustrated in `sampleconfig.js`).

To make sure that the remote database has the correct tables and table format, run
```
node template.js
```
You will need to ^C to stop the node process once everything is done (once logs stop). Because Sequelize resolves UPDATE promises before the database has completed them, I haven't been able to figure out how to close the database connection after the database is finished with its work.

Next, to synchronize the remote database with your local one, run
```
node sync.js
```
Again, ^C when the sync is complete.

## Technologies:

* Sequelize
* PostgreSQL