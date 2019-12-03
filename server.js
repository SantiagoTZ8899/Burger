// express set up
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("pulic"));

// parse application JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// port setup
const PORT = process.env.PORT || 8080;

// handlebar setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});