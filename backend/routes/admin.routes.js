const express = require("express");

const { adminRegister, AdminLogin} = require("../controllers/admin.controller");


const routes = express.Router();

routes.post("/login", AdminLogin);
routes.post("/register", adminRegister);

module.exports = routes;
