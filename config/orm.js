const connection = require("./connection.js");

const orm = {
    select: function(table, cb) {
        let query = `SELECT * FROM ??`
        connection.query(query, [table], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);

        });
    },

    create: function(table, column, value) {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`
        connection.query(insertQuery, [table, colums, value], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

    update: function(table, column, newVal, whereCol, whereVal) {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], function (err, result) {
            if (err) {
                throw err; 
            }
            console.log(result);
        });
    },

    delete: function(table, column, value) {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`
        connection.query(deleteQuery, [table, column, value], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }

}