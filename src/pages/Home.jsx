import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

const Home = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
    }, []);


  return (
    <div>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={3}
        showStatus={false}
      >
        {movie.map((item) => (
          <div key={item.id}>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${item.id}`}
            >
              <div>
                <img
                  style={{ width: "100%", height: "80vh" }}
                  src={`https://image.tmdb.org/t/p/original${
                    item && item.backdrop_path
                  }`}
                />
              </div>
              <div className="overlay">
                <h2>{item.original_title}</h2>
                <div>{item.release_date}</div>
                <div>{item.overview}</div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
      <Movie />
    </div>
  );
};

export default Home;
