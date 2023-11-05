import App from "./App.jsx";
import Home from "./pages/home";
import Detail from "./pages/Detail.jsx";
// import Login from "./pages/Login";
// import Categories from "./pages/Categories.jsx";
// import RegisterAdmin from "./pages/RegisterAdmin.jsx";

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
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
