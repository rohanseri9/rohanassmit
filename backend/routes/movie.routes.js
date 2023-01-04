const express = require("express");

const { addMovie , getMovies , getMovieDetails} = require("../controllers/movieController");


const routes = express.Router();

routes.post("/add", addMovie);
routes.get("/movies" , getMovies)
routes.get("/:id", getMovieDetails)
module.exports = routes;
