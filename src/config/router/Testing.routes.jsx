import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import UserPanel from "../../screens/UserPanel"
import NotFound from "../../screens/NotFound";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";
import Courses from "../../screens/Courses";
import Articles from "../../screens/Articles";

export const TestingRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/courses", element: <Courses /> },
      { path: "/articles", element: <Articles /> },
    ],
  },
  { path: "/userPanel", element: <UserPanel /> },
  { path: "/login", element: <LoginRegisterForgetPassLayout /> },
  { path: "/*", element: <NotFound /> },
]);
