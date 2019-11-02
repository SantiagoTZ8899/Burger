const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// create main routes, and their logic
// this will get all the burgers info from the database
 router.get("/", function(req, res) {
    burger.select(function(data) {
        let handlebarsObject = {
            burger: data
        };
        res.render("index", handlebarsObject);
     })
 });

// creating a new burger to send to the database
router.post("/api/burger", function(req, res) {
    let newBurger = req.body.name;
    burger.create("burger_name", newBurger, function(result) {
        // DB_common::affectedRows() – Finds number of rows affected by a data changing query
        if(result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(204).end();
    })
});

// update database
router.put("/api/burger/:id", function(req, res) {
    let status = Boolean(req.body.devoured);
    console.log("buger status ", status);
    // updating the devoured status of the burger
    burger.update("devoured", status, "id", req.params.id, function(results) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(204).end();
    });
});

module.exports = router;