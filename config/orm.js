// import/require connection.js file to stablish connection
const connection = require("./connection.js");

// got this following function from an ecample on stack overflow

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// create the data structure to be used when selecting from DB
let orm = {
    selectAll: (table, cb) => {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            console.log("this should display all burgers")
            // console.log(result);
            cb(result);

        });
    },

    create: (table, col, val, cb) => {
        let query = "INSERT INTO " + table + " (" + col.toString() + ") ";
        query += "VALUES (?)";
        connection.query(query, [val], (err, result) => {
            if (err) {
                throw err;
            }
            console.log("this should add a burger to the database")
            // console.log(result);
            cb(result);
        });
    },

    update: (table, objColVal, id, cb) => {
        let query = "UPDATE " + " SET " + objToSql(objColVal);
        query += " WHERE id = " + id;
        console.log(query);
        connection.query(query, (err, result) => {
            if (err) {
                throw err; 
            }
            console.log("this updates the burger status")
            // console.log(result);
            cb(result);
        });
    },

    delete: (table, id, cb) => {
        let query = "DELETE FROM " + table;
        query += " WHERE id = " + id;
        console.log(query);
        connection.query(query, (err, result)  => {
            if (err) {
                throw err;
            }
            console.log("this should delete devoured burgers from the database")
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;