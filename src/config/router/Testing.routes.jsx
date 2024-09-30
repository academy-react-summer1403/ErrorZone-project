import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import UserPanel from "../../screens/UserPanel"
import NotFound from "../../screens/NotFound";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";

export const TestingRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
    ],
  },
  { path: "/UserPanel", element: <UserPanel /> },
  { path: "/login", element: <LoginRegisterForgetPassLayout /> },
  { path: "/*", element: <NotFound /> },
]);
