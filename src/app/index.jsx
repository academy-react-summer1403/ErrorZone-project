import { Fragment, useEffect } from "react";
import http from "../core/services/interceptor";
import Header from "../screens/Header/index";
import Footer from "../screens/Footer/index";
import { Outlet } from "react-router-dom";
import GsapAnim from "../components/common/animations/GsapAnim";
import VoiceAssistance from "../components/common/VoiceAssistance/VoiceAssistance";

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <VoiceAssistance />
    </>
  );
}

export default App;
