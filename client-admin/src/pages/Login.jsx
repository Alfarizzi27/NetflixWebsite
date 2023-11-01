import { Link } from "react-router-dom";
import imgBg from "../assets/img/bg.jpeg";
import logo from "../assets/img/logo.png";
import video from "../assets/vid/netflix.mp4";

function Login() {
  return (
    <>
      <div className="container-fluid container-vid">
        <video className="myVideo" autoPlay muted loop>
          <source src={video} className="vid-netflix" />
        </video>
        <div className="row" id="login-row">
          <div className="col-10" id="login-col">
            <div className="col-6" id="login-img">
              <div className="col-12" id="img-login">
                <img
                  src={logo}
                  alt=""
                  style={{ marginTop: "20px", height: "120px" }}
                />
              </div>
              <div className="col-12" id="login-form">
                <div className="col-8" id="login-content">
                  <form id="form-login">
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        className="form-control form-login"
                        placeholder="Enter your email"
                        name="email"
                      />
                    </div>
                    <div
                      className="form-outline mb-2"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="password"
                        id=""
                        className="form-control form-login"
                        placeholder="Enter your password"
                        name="password"
                        autoComplete="on"
                      />
                    </div>
                    <div
                      className="text-center pt-1 pb-1 mt-4"
                      style={{ display: "block", height: "fitContent" }}
                    >
                      <Link to="/">
                        <button
                          className="btn fa-lg btn-login gradient-custom-2 "
                          type="button"
                          style={{
                            borderColor: "white",
                            width: "100px",
                            height: "40px",
                            color: "white",
                            fontSize: "14px",
                          }}
                        >
                          Login
                        </button>
                      </Link>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.542)",
                          marginBottom: "5px",
                        }}
                      >
                        Or login with
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4 mt-2">
                      <p
                        className="mb-0 me-2"
                        style={{ color: "rgba(255, 255, 255, 0.542)" }}
                      >
                        Need an account?
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-signup"
                        style={{ marginBottom: "0px" }}
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6" id="login-detail">
              <div className="bg"></div>
              <div className="model-login"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
