const express = require("express")
const route = express.Router()


route.get("/", (req, res) => {
    res.render("index");
})

route.get("/about", (req, res) => {
    res.render("About");
})

route.get("/services", (req, res) => {
    res.render("services");
})

route.get("/contact", (req, res) => {
    res.render("contact");
})

module.exports = route;