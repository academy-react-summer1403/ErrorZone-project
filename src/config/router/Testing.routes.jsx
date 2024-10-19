import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import StudentPanel from "../../screens/studentPanel";
import NotFound from "../../screens/NotFound";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";
import { LoginForm } from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginForm";
import LoginVerifyCode from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginVerifyCode";

import Courses from "../../screens/Courses";
import Articles from "../../screens/Articles";

import Dashboard from "../../components/StudentPanelHolder/StudentPanelPage/Dashboard/Dashboard";
import MyCourse from "../../components/StudentPanelHolder/StudentPanelPage/MyCourse/MyCourse";
import ReservesCourse from "../../components/StudentPanelHolder/StudentPanelPage/reservesCourse/reservesCourse";
import CoursesFav from "../../components/StudentPanelHolder/StudentPanelPage/Coursesfav/Coursesfav";
import BlogFav from "../../components/StudentPanelHolder/StudentPanelPage/Blogfav/Blogfav";
import Profile from "../../components/StudentPanelHolder/StudentPanelPage/profile/profile";
import RegisterFormStep1 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep1";
import RegisterFormStep2 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep2";
import RegisterFormStep3 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep3";
import RegisterStepper from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterForm";

import CourseDetail from "../../screens/CourseDetail/CourseDetail";

import ArticlesDetail from "../../screens/ArticlesDetail";

export const TestingRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/courses", element: <Courses /> },
      { path: "/articles", element: <Articles /> },
      { path: "/teachers", element: <Landing /> },
      { path: "/courses/:id", element: <CourseDetail /> },
      { path: "/articles/detail/:articleId", element: <ArticlesDetail /> },
    ],
  },

  {
    path: "/login",
    element: <LoginRegisterForgetPassLayout />,
    children: [
      { path: "/login", element: <LoginForm /> },
      { path: "/login/verifycode", element: <LoginVerifyCode /> },
      { path: "/login/register/step1", element: <RegisterFormStep1 /> },
      { path: "/login/register/step2", element: <RegisterFormStep2 /> },
      { path: "/login/register/step3", element: <RegisterFormStep3 /> },
    ],
  },

  {
    path: "/StudentPanel",
    element: <StudentPanel />,
    children: [
      { path: "/StudentPanel/dashboard", element: <Dashboard />},
      { path: "/StudentPanel/myCourse", element: <MyCourse /> },
      { path: "/StudentPanel/reservesCourse", element: <ReservesCourse /> },
      { path: "/StudentPanel/Coursesfav", element: <CoursesFav /> },
      { path: "/StudentPanel/Blogfav", element: <BlogFav /> },
      { path: "/StudentPanel/profile", element: <Profile /> },
    ],
  },

  { path: "/*", element: <NotFound /> },
]);
