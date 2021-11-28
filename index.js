// Packages
const express = require("express");
const app = express();
const slash = require("express-slash");
const fetch = import("node-fetch");
const path = import("path");

// App settings
app.enable("strict routing");

const router = express.Router({
    caseSensitive: app.get("case sensitive routing"),
    strict: app.get("strict routing")
});

app.use(router);
app.use(slash());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Routes
router.get("/home", (req, res) => {
    res.render("home");
    res.status(200);
});

router.get("/", (req, res) => {
    res.redirect("/home")
});

router.get("/cookies", (req, res) => {
    res.render("cookies");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/contact/success", (req, res) => {
    res.render("contactsuccess");
});

router.get("/login", (req, res) => {
    res.render("login")
});

app.use(function (req, res, next) {
    res.render("404");
    console.log("404");
});

// Port
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.listen(process.env.PORT);