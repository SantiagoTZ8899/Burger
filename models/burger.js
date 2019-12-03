// require/import orm.js into burger.js
let orm = require("../config/orm.js");

const burger = {
    // display all of the burgers in the databsae
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // add new burger to the database
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // change the devoured status of the a burger to TRUE
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    // delete a burger from the database
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// export at the end of the burger.js file
module.exports = burger;