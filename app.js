var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ============================== ROUTES =======================================

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/browse", function(req, res) {
    res.render("index");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

// ============================== ALBUM ROUTES =================================

app.get("/browse/album", function(req, res) {
    res.render("album/show");
});

app.get("/browse/album/song/id", function(req, res) {
    res.render("album/song");
});

// ====================== SERVER CONFIG ========================================

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("SERVER STARTED");
});
