import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";
import NotFound from "../../screens/NotFound";

export const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <NotFound /> },
]);
