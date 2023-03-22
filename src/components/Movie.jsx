import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";
const Movie = () => {
  const [movieList, setMovie] = useState([]);
  const { type } = useParams();


  useEffect(() => {
    getData();
  }, [type]);
  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )

      .then((res) => {
        setMovie(res.data.results);
      });
  };

  return (
    <div className="color">
      <h1 className="text-center">{type} FILMS</h1>
      {movieList.map((movie) => (
        <Cards movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movie;
