const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// create main routes, and their logic
// this will get all the burgers info from the database
 router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        let hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
     })
 });

// creating a new burger to send to the database
router.post("/api/burger", (req, res) => {
    let newBurger = req.body.name;
    burger.create("burger_name", newBurger, (result) => {
        // DB_common::affectedRows() – Finds number of rows affected by a data changing query
        if(result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(204).end();
    })
});

// update database
router.put("/api/:id", (req, res) => {
    burger.update ({
        devoured: req.body.devoured
        }, req.params.id, function(result) {
        // updating the devoured status of the burger
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
        res.status(204).end();
        }
    });
});


module.exports = router;