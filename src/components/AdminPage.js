// import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
function AdminPage() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("https://placeimg.com/640/480/any");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [rating , setRating] = useState([]);
  const addMovie = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      description: description,
      picture: picture,
      rating: rating
    };

    axios
      .post("http://localhost:3000/add", data)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
    {success && <div>Movie Added Successfully</div>}
      <form onSubmit={addMovie} className="login">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="number" placeholder="Add star rating Max 5" max={5} maxLength="5" onChange={(e) => setRating(e.target.value)}/>
        <textarea
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
}
export default AdminPage;
