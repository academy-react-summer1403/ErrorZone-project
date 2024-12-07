import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import StudentPanel from "../../screens/studentPanel";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";
import { LoginForm } from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginForm";
import LoginVerifyCode from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginVerifyCode";

import Courses from "../../screens/Courses";
import Articles from "../../screens/Articles";

import Dashboard from "../../components/StudentPanelHolder/StudentPanelPage/Dashboard/Dashboard";
import MyCourse from "../../components/StudentPanelHolder/StudentPanelPage/MyCourse/MyCourse";
import ReservesCourse from "../../components/StudentPanelHolder/StudentPanelPage/reservesCourse/reservesCourse";
import BlogFav from "../../components/StudentPanelHolder/StudentPanelPage/Blogfav/Blogfav";

import RegisterFormStep1 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep1";
import RegisterFormStep2 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep2";
import RegisterFormStep3 from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterFormStep3";
import RegisterStepper from "../../components/User/LoginRegisterForgetPass/RegisterHolder/RegisterForm";

import ProfileUserInformation from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/ProfileUserInformation/ProfileUserInformation";
import ProfileImages from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/ProfileImages/ProfileImages";
import ProfileAddress from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/ProfileAddress/ProfileAddress";
import UserLinks from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/UserLinks/UserLinks";
import Profile from "../../components/StudentPanelHolder/StudentPanelPage/Profile/Profile";

import CourseDetail from "../../screens/CourseDetail/CourseDetail";

import ArticlesDetail from "../../screens/ArticlesDetail";
import ForgetPassword from "../../screens/ForgetPassword/ForgetPassword";
import ForgetPassFormStep2 from "../../components/User/LoginRegisterForgetPass/ForgetPassHolder/ForgetPassFormStep2";
import ProfileInformation from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/ProfileUserInformation/ProfileInformation";
import UserComponents from "../../components/StudentPanelHolder/StudentPanelPage/ProfileComponents/UserLinks/UserComponents";

import AccountSettingsPage from "../../components/StudentPanelHolder/StudentPanelPage/Accounts";

import MyPayMents from "../../components/StudentPanelHolder/StudentPanelPage/MyPayments/MyPayMents";
import NavigationsPage from "../../components/StudentPanelHolder/StudentPanelPage/UserSecurity/Navigation/Navigations";
import ChangePassowrd from "../../components/StudentPanelHolder/StudentPanelPage/UserSecurity/ChangePassword/ChangePassowrd";
import TwoStepVerfication from "../../components/StudentPanelHolder/StudentPanelPage/UserSecurity/TwoStepVerfication/TwoStepVerfication";
import MyJobs from "../../components/StudentPanelHolder/StudentPanelPage/MyJobs/MyJobs";
import { NotFound } from "../../screens/NotFound/NotFound";
import CoursesFav from "../../components/StudentPanelHolder/StudentPanelPage/CoursesFav/CoursesFav";
import { Error } from "../../screens/Error/Error";

export const TestingRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Landing />, errorElement: <Error /> },
      { path: "/courses", errorElement: <Error />, element: <Courses /> },
      { path: "/articles", errorElement: <Error />, element: <Articles /> },
      { path: "/teachers", errorElement: <Error />, element: <Landing /> },
      {
        path: "/courses/:id",
        errorElement: <Error />,
        element: <CourseDetail />,
      },
      {
        path: "/articles/detail/:articleId",
        errorElement: <Error />,
        element: <ArticlesDetail />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginRegisterForgetPassLayout />,
    errorElement: <Error />,
    children: [
      { path: "/login", errorElement: <Error />, element: <LoginForm /> },
      {
        path: "/login/verifycode",
        errorElement: <Error />,
        element: <LoginVerifyCode />,
      },
      {
        path: "/login/register/step1",
        errorElement: <Error />,
        element: <RegisterFormStep1 />,
      },
      {
        path: "/login/register/step2",
        errorElement: <Error />,
        element: <RegisterFormStep2 />,
      },
      {
        path: "/login/register/step3",
        errorElement: <Error />,
        element: <RegisterFormStep3 />,
      },
      {
        path: "/login/forgetpass",
        errorElement: <Error />,
        element: <ForgetPassword />,
      },
      {
        path: "/login/forgetpass/step2/:ConfigValue",
        element: <ForgetPassFormStep2 />,
        errorElement: <Error />,
      },
    ],
  },

  {
    path: "/StudentPanel",
    element: <StudentPanel />,
    errorElement: <Error />,
    children: [
      {
        path: "/StudentPanel/:id?",
        errorElement: <Error />,
        element: <Dashboard />,
      },
      {
        path: "/StudentPanel/Accounts/",
        errorElement: <Error />,
        element: <AccountSettingsPage />,
      },

      {
        path: "/StudentPanel/myCourse",
        errorElement: <Error />,
        element: <MyCourse />,
      },
      {
        path: "/StudentPanel/reservesCourse",
        errorElement: <Error />,
        element: <ReservesCourse />,
      },
      {
        path: "/StudentPanel/Coursesfav",
        errorElement: <Error />,
        element: <CoursesFav />,
      },
      {
        path: "/StudentPanel/Blogfav",
        errorElement: <Error />,
        element: <BlogFav />,
      },

      {
        path: "/StudentPanel/payment",
        errorElement: <Error />,
        element: <MyPayMents />,
      },
      {
        path: "/StudentPanel/security",
        errorElement: <Error />,
        element: <NavigationsPage />,
        children: [
          {
            path: "/StudentPanel/security",
            errorElement: <Error />,
            element: <ChangePassowrd />,
          },
          {
            path: "/StudentPanel/security/TwoStepVerification",
            errorElement: <Error />,
            element: <TwoStepVerfication />,
          },
        ],
      },
      {
        path: "/StudentPanel/profile",
        errorElement: <Error />,
        element: <Profile />,
        children: [
          {
            path: "/StudentPanel/profile",
            errorElement: <Error />,
            element: <ProfileInformation />,
          },
          {
            path: "/StudentPanel/profile/UserImages",
            errorElement: <Error />,
            element: <ProfileImages />,
          },
          {
            path: "/StudentPanel/profile/UserAddress",
            errorElement: <Error />,
            element: <ProfileAddress />,
          },
          {
            path: "/StudentPanel/profile/UserLinks",
            errorElement: <Error />,
            element: <UserComponents />,
          },
          {
            path: "/StudentPanel/profile/myjobs",
            errorElement: <Error />,
            element: <MyJobs />,
          },
        ],
      },
    ],
  },

  { path: "/*", element: <NotFound /> },
]);
