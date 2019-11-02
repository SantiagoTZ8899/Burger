const orm = require("../config/orm.js");

const burger = {
    select: function(cb) {
        orm.select("burgers", function(result) {
            cb(result);
        });
    },

    create: function(cb) {
        orm.create("burgers", column, value, function(result) {
            cb(result);
        });
    },

    update: function(cb) {
        orm.update("burgers", column, newVal, whereCol, whereVal, function(result) {
            cb(result);
        });
    }
}

module.exports = burger;