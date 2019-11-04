// require/import orm.js
let orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },

    create: (col, val, cb) => {
        orm.create("burgers", col, val, function(result) {
            cb(result);
        });
    },

    update: (objColVal, id, cb) => {
        orm.update("burgers", objColVal, id, (result) => {
            cb(result);
        });
    },

    delete: (id, cb) => {
        orm.delete("burgers", id, (result) => {
            cb(result);
        });
    }
};

module.exports = burger;