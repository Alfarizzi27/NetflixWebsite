import { useState } from "react";
import video from "./assets/vid/netflix.mp4";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container-fluid container-vid">
        {/* <video className="myVideo" autoPlay muted loop>
          <source src={video} className="vid-netflix" />
        </video>
        <Login /> */}
        <Home />
      </div>
    </>
  );
}

export default App;
