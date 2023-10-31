import App from "./App.jsx";
import Home from "./pages/home";
import Login from "./pages/Login";
import Categories from "./pages/Categories.jsx";
import "./index.css";

import { createBrowserRouter, redirect } from "react-router-dom";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
