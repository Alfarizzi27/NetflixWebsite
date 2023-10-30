import logo2 from "../assets/img/logo2.jpeg";

function Sidebar() {
  return (
    <div className="col">
      <div className="card text-white mb-3 side-bar">
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
              <div className="div">
                <li className="nav-item nav-item-icon">
                  <a className="nav-link text-white " href="./dashboard.html">
                    <div className="text-white text-center me-2 d-flex align-items-center">
                      <i className="material-icons opacity-10">dashboard</i>
                      <span className="nav-link-text ms-3">Dashboard</span>
                    </div>
                  </a>
                </li>

                <li className="nav-item nav-item-icon">
                  <a className="nav-link text-white " href="./tables.html">
                    <div className="text-white text-center me-2 d-flex align-items-center">
                      <i className="material-icons opacity-10">table_view</i>
                      <span className="nav-link-text ms-3">Categories</span>
                    </div>
                  </a>
                </li>

                <li className="nav-item nav-item-icon">
                  <a className="nav-link text-white " href="./billing.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt_long</i>
                      <span className="nav-link-text ms-3">Register Admin</span>
                    </div>
                  </a>
                </li>
              </div>
              <div style={{ width: "220px" }}>
                <a
                  className="btn btn-outline-primary mt-4 w-100"
                  href="#"
                  type="button"
                  style={{ width: "400px" }}
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
