// require/import orm.js
const orm = require("../config/orm");

const burger = {
    select: (cb) => {
        orm.select("burgers", (result) => {
            cb(result);
        });
    },

    create: (column, value, cb) => {
        orm.create("burgers", column, value, function(result) {
            cb(result);
        });
    },

    update: (column, newVal, cb) => {
        orm.update("burgers", column, newVal, whereCol, whereVal, (result) => {
            cb(result);
        });
    }
}

module.exports = burger;