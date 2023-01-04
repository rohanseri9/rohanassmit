import React, { useEffect } from "react";
import "./style.css"
import {
  Card,
  Col,
  Row,
  Rate,
  Space,
  Modal,
  Button,
  Select,
  Typography,
  Form,
  Input,
  message,
} from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import MovieDetails from "./MovieDetails";

const { Meta } = Card;
//Default movie data

const MoviesList = () => {
  const [movies, getMovies] = useState([]);
    const [movieData , setMovieData] = useState(false)
    const[movieId , setMovieId] = useState("")
  const [sort, setSort] = useState("asc");
const  MovieData = (id) => {
    setMovieData(true)
    setMovieId(id)
}

  useEffect(() => {
    axios.get("http://localhost:3000/movies")
    .then((res) => res.data).then((movies) => getMovies(movies));
  }, []);
  //Sort
  const getSort = () => {
    const sorted = [...movies];
    sorted.sort((a, b) => {
      if (sort === "asc") {
        return a.rating > b.rating ? 1 : a.rating === b.rating ? 0 : -1;
      } else {
        return a.rating < b.rating ? 1 : a.rating === b.rating ? 0 : -1;
      }
    });
    return sorted;
  };
  const submit = () => {
    message.success("Your review has been submitted. Thank you!");
  };
  return (
    <>
    {!movieData &&
    <>
      <div className="sort">
        <Typography.Text>Sort by </Typography.Text>
        <Select
          onChange={(value) => {
            setSort(value);
          }}
          defaultValue={"asc"}
          options={[
            { label: "Rating: Low to High", value: "asc" },
            { label: "Rating: High to Low", value: "desc" },
          ]}
        ></Select>
      </div>
      <Row gutter={16}>
        {getSort(movies).map((item, index) => (
          <>
            <Col  className="wrapper" sm={12} xs={24} md={8} lg={8} key={item._id} onClick={(e) => MovieData(item._id)}>
     
              <Card
               key={item._id}
                hoverable
                cover={
                  <img alt="" src={item.picture} />
                }
              
              >
                <Meta
                  title={
                    <Space>
                      <span>{item.title}</span>{" "}
                      <Rate
                        allowHalf
                        defaultValue={Number(item.rating)}
                        disabled
                      />
                    </Space>
                  }
                  description={item.description}
                />
              </Card>
            </Col>
          </>
        ))}
      </Row>
      </>
}

    {movieData && <MovieDetails movieId={movieId}  />}  
     
    </>
  );
};
export default MoviesList;
