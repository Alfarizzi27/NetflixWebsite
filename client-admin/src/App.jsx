import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";
// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div
            className="col-9"
            style={{ marginTop: "10px", marginLeft: "-50px" }}
          >
            <Outlet />
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
