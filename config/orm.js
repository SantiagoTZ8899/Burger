// import/require connection.js file to stablish connection
const connection = require("./connection.js");

// create the data structure to be used when selecting from DB
const orm = {
    select: (table, cb) => {
        let query = `SELECT * FROM ??`
        connection.query(query, [table], (err, result) => {
            if (err) {
                throw err;
            }
            console.log("this should display all burgers")
            console.log(result);
            // cb(result);

        });
    },

    create: (table, column, value) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`
        connection.query(insertQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log("this should add a burger to the database")
            console.log(result);
            // cb(result);
        });
    },

    update: (table, column, newVal, whereCol, whereVal) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, result) => {
            if (err) {
                throw err; 
            }
            console.log("this updates the burger status")
            console.log(result);
            // cb(result);
        });
    },

    delete: (table, column, value, cb) => {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`
        connection.query(deleteQuery, [table, column, value], (err, result)  => {
            if (err) {
                throw err;
            }
            console.log("this should delete devoured burgers from the database")
            console.log(result);
            // cb(result);
        });
    }
}

module.exports = orm;