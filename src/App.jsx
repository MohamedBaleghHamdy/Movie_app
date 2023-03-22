import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";


const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/:type" element={<Movie />} />
        {/* <Route path="/*" element={<Error />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
