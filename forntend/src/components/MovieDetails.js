import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Rate } from "antd";
import './style.css'
const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState();
  const [review , setReview] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${movieId}`)
      .then((res) => res.data)
      .then((movie) => setMovie(movie));
  }, [review]);
  const submitReview = () => {
    
    movie.comment.push(review)
  }
  return (
    <div className="movie-wrapper">
     <img src={movie?.picture} alt="" />\
          <h3>{movie?.title}</h3>
      <div>
      <Rate allowHalf defaultValue={movie?.rating} />
        {/* <Rate allowHalf defaultValue={Number(movie.rating)} disabled /> */}
      </div>
      <textarea onChange={(e) => setReview(e.target.value)}></textarea>
      <button onClick={submitReview}>Submit Review</button>
    
    <div>
        <h4>Review</h4>
        {review}
        {movie?.comment}
    </div>
    </div>


  );
};

export default MovieDetails;
