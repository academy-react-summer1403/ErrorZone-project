import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index";
import Landing from "../../screens/Landing";
import UserPanel from "../../screens/UserPanel"
import NotFound from "../../screens/NotFound";
import { LoginRegisterForgetPassLayout } from "../../components/User/LoginRegisterForgetPass/LoginRegisterForgetPassLayout";
import { LoginForm } from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginForm";
import LoginVerifyCode from "../../components/User/LoginRegisterForgetPass/LoginHolder/LoginVerifyCode";

export const TestingRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
    ],
  },
  { path: "/UserPanel", element: <UserPanel /> },
  { path: "/login", element: <LoginRegisterForgetPassLayout /> , children:[
    {path: "/login" , element:<LoginForm />},
    {path: "/login/verifycode" , element:<LoginVerifyCode />},    
  ]},
  { path: "/*", element: <NotFound /> },
]);
