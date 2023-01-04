const mongoose = require("mongoose");
const { Schema } = mongoose;

let movieSchema = Schema(
  {
    title: {
        type: String
    },
    picture: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Array
    },
    comments: {
        type: Array
    }
  },
  {
    collection: "movieInfo",
  }
);

const Movie = mongoose.model("movieInfo", movieSchema);

module.exports = Movie;
