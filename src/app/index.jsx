import { Fragment, useEffect } from "react";
import http from "../core/services/interceptor";
import Header from "../screens/Header/index";
import Footer from "../screens/Footer/index";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
