import { Link, useNavigate } from "react-router-dom";
import imgBg from "../assets/img/bg.jpeg";
import logo from "../assets/img/logo.png";
import video from "../assets/vid/netflix.mp4";
import { useEffect, useState } from "react";
import { loginStart } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginStart({ email: login.email, password: login.password }, navigate)
    );
  };

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
                  <form onSubmit={submitHandler} id="form-login">
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        className="form-control form-login"
                        placeholder="Enter your email"
                        name="email"
                        onChange={changeHandler}
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
                        onChange={changeHandler}
                      />
                    </div>
                    <div
                      className="text-center pt-1 pb-1 mt-4"
                      style={{ display: "block", height: "fitContent" }}
                    >
                      <button
                        className="btn fa-lg btn-login gradient-custom-2 "
                        type="submit"
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
