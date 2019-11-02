const orm = require("../config/orm.js");

const burger = {
    select: function(cb) {
        orm.select("burgers", function(results) {
            cb(results);
        });
    },

    create: function(cb) {
        orm.create("burgers", column, value, function(result) {
            cb(res);
        });
    }

}
