import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/img/logo2.jpeg";

function Sidebar() {
  const logout = () => {
    console.log("logout");
    localStorage.clear();
    const navigate = useNavigate();
    navigate("/login");
  };

  return (
    <div className="col">
      <div
        className="card text-white mb-3 side-bar"
        style={{ zIndex: "5", height: "95vh" }}
      >
        <div
          className="card-headers mt-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo2} style={{ height: "30px" }} />
          <p
            style={{
              fontWeight: "700",
              marginBottom: "0px",
              marginLeft: "10px",
              fontSize: "20px",
            }}
          >
            Netflix Admin
          </p>
        </div>
        <hr className="horizontal light mt-4 mb-2" />
        <div className="card-body" style={{ display: "flex", padding: "0px" }}>
          <ul className="navbar-nav">
            <div
              className="div-nav"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-between",
                height: "630px",
              }}
            >
              <div className="div" style={{ width: "100%" }}>
                <li className="nav-item nav-item-icon">
                  <Link to="/" className="nav-link text-white " href="#">
                    <div className="text-white text-center me-2 d-flex align-items-center">
                      <i className="material-icons opacity-10">dashboard</i>
                      <span className="nav-link-text ms-3">Dashboard</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item nav-item-icon">
                  <Link
                    to="/categories"
                    className="nav-link text-white "
                    href="#"
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center">
                      <i className="material-icons opacity-10">table_view</i>
                      <span className="nav-link-text ms-3">Genre</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item nav-item-icon">
                  <a className="nav-link text-white " href="#">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt_long</i>
                      <span className="nav-link-text ms-3">Register Admin</span>
                    </div>
                  </a>
                </li>
              </div>
              <div
                style={{
                  width: "100%",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  onClick={logout}
                  className="btn btn-outline-primary w-100"
                  href="#"
                  type="button"
                >
                  Logout
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
