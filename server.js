var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));  //serve static content for the app from the "public" directory in the application directory

var exphbs = require("express-handlebars");   //set Handlebars

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");   //Import routes and give the server access to them

app.use(routes);

app.listen(PORT, function() {   //Start our server so that it can begin lstening to client requests
    console.log("Server listening on: http://localhost:" + PORT);   //Log(server-side) when our server has started
})