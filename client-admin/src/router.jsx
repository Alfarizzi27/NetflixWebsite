import App from "./App.jsx";
import Home from "./pages/home";
import Login from "./pages/Login";
import Categories from "./pages/Categories.jsx";
import RegisterAdmin from "./pages/RegisterAdmin.jsx";
import "./index.css";

import { createBrowserRouter, redirect } from "react-router-dom";

function authenticated() {
  if (!localStorage.access_token) {
    return redirect("/login");
  } else {
    return null;
  }
}

function isLogin() {
  if (localStorage.access_token) {
    return redirect("/");
  } else {
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "register",
        element: <RegisterAdmin />,
      },
    ],
    loader: authenticated,
  },
  {
    path: "/login",
    element: <Login />,
    loader: isLogin,
  },
]);

export default router;
