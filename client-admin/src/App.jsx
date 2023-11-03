import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";

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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
