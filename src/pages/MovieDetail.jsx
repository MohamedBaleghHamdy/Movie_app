import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      });
  };

  return (
    <div className="color">
      <div className="container ">
        <img
          style={{ width: "100%", height: "80vh" }}
          src={`https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <h1 className="text-center mt-2">Movie Details</h1>

            <div className="col-md-12 d-flex ms-3 mt-5">
              <img
                style={{
                  width: "33%",
                  height: "60vh",
                }}
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.poster_path
                }`}
              />
              <div className="ms-4 ">
                <h2>{movie && movie.original_title}</h2>
                <p>{movie && movie.tagline} </p>
                <h6>{movie && movie.vote_count} Watch This</h6>
                <h6>{movie && movie.runtime} minis</h6>
                <h6> Release Date: {movie && movie.release_date}</h6>
                <p className="w-100"> Overview: {movie && movie.overview}</p>
                <div>
                  {movie && movie.imdb_id && (
                    <a
                      href={"https://www.imdb.com/title/" + movie.imdb_id}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        style={{
                          background: "red ",
                          width: "10% ",
                          textAlign: "center",
                          padding: "10px",
                          borderRadius:"20px"
                        }}
                      >
                        <span>IMDb</span>
                      </p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
