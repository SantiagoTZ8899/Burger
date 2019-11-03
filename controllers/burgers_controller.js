const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// create main routes, and their logic
// this will get all the burgers info from the database
 router.get("/", (req, res) => {
    burger.select(function (data) {
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
router.put("/api/burger/:id", (req, res) => {
    let status = Boolean(req.body.devoured);
    console.log("burger status ", status);
    // updating the devoured status of the burger
    burger.update("devoured", status, "id", req.params.id, (result) => {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(204).end();
    });
});

module.exports = router;