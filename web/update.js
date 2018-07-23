const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database(':memory:', (error) => {
    if (error) {
        console.error('Unable to connect to database.');
    }
    console.log('Database initialised');
});
