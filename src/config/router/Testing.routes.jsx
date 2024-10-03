import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import StudentPanel from "../../screens/StudentPanel"
import NotFound from "../../screens/NotFound";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";

import Courses from "../../screens/Courses";
import Articles from "../../screens/Articles";

import Dashboard from "../../components/StudentPanelHolder/StudentPanelPage/Dashboard/Dashboard";
import MyCourse from "../../components/StudentPanelHolder/StudentPanelPage/MyCourse/MyCourse";
import ReservesCourse from "../../components/StudentPanelHolder/StudentPanelPage/reservesCourse/reservesCourse";
import CoursesFav from "../../components/StudentPanelHolder/StudentPanelPage/Coursesfav/Coursesfav";
import BlogFav from "../../components/StudentPanelHolder/StudentPanelPage/Blogfav/Blogfav";
import Profile from "../../components/StudentPanelHolder/StudentPanelPage/profile/profile";




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


  { path: "/StudentPanel", element: <StudentPanel />, children:[
    {path: "/StudentPanel/dashboard", element:<Dashboard /> , },
    {path: "/StudentPanel/myCourse", element: <MyCourse />, } ,
    {path: "/StudentPanel/reservesCourse", element:<ReservesCourse />, },
    {path: "/StudentPanel/Coursesfav", element: <CoursesFav /> , },
    {path: "/StudentPanel/Blogfav", element:<BlogFav /> , },
    {path: "/StudentPanel/profile", element:<Profile /> , },

  ] },
  { path: "/login", element: <LoginRegisterForgetPassLayout /> },
  { path: "/*", element: <NotFound /> },
]);
