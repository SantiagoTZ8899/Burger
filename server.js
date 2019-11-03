// express set up
const express = require("express");
const app = express();

app.use(express.static("pulic"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// port setup
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("main server.js listening on : http://localhost:" + PORT);
});

// handlebar setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);