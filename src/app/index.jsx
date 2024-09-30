import { Fragment, useEffect } from "react";
import http from "../core/services/interceptor";
import Header from "../screens/Header/index";
import Footer from "../screens/Footer/index";
import { Outlet } from "react-router-dom";

function App() {
  /////////////////////////////////////////////////// for example
  const getCourseList = async (count) => {
    try {
      const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching course list:", error);
      return false;
    }
  };
  useEffect(() => {
    getCourseList(5);
  }, []);
  ////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
