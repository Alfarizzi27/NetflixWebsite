import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesStart } from "../store/actions";
import CardMovies from "../components/CardMovies";
import CarouselMovies from "../components/Carousel";

function Home() {
  const movies = useSelector((state) => state.movies.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            className="col-10"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
            }}
          >
            {movies.map((movie) => (
              <CardMovies key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
