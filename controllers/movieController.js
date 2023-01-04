const Movie = require("../models/movie.model");
const addMovie = (req, res) => {
  const title  = req.body.title;

  Movie.findOne({ title }, (err, user) => {
    if (user) {
      res.send({ message: "Movie already exist" });
    } else {
      const newMovie = new Movie({ ...req.body });
      newMovie.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Movie added successfully" });
        }
      });
    }
  });
};

const getMovies = async (req, res) => {
    Movie.find({}, (err, result) => {
        console.log(result);
        res.send(result);
      });
  }

  const getMovieDetails = async (req, res) => {
    const movie = await Movie.findOne({_id: req.params.id}, (err, result) => {
        if(result) {
          res.send(result);
        } else {
          res.send(err);
        }
      }).clone();  
  }
  
  
module.exports = { addMovie , getMovies , getMovieDetails};
