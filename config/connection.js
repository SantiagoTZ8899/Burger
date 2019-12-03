// require mysql
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection ({
        host: "localhost",

        port: 3306,
        
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

// connect to my sql, and console log connectiong error or success
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(connection.threadId + " is connected");
});

// export the connection so that it can be accessible by other files in the app
module.exports = connection;
