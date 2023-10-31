import { useState, useEffect } from "react";
import video from "./assets/vid/netflix.mp4";
import Login from "./pages/Login";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      let response = await fetch("http://localhost:3000/movies");

      if (!response.ok) {
        throw { name: "gagal fetch" };
      }

      response = await response.json();
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {/* <div className="container-fluid container-vid">
        <video className="myVideo" autoPlay muted loop>
          <source src={video} className="vid-netflix" />
        </video>
        <Login />
      </div> */}
      <Home movies={movies} />
    </>
  );
}

export default App;
