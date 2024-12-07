import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

const NavigationsPage = () => {
  const locationPath = useLocation().pathname;

  const handleSteps = (location) => {
    if (location === "/StudentPanel/security") {
      return (
        <div className="flex flex-col gap-5 pt-20 pr-5 font-DanaFaNum-600">
          {" "}
          <Link to="/StudentPanel/security" className="bg-blue w-32 h-14 rounded-2xl flex justify-center items-center text-white">
            {" "}
            تغییررمزعبور{" "}
          </Link>
          <Link
            to="/StudentPanel/security/TwoStepVerification"
            className="bg-blue opacity-[20%] w-32 h-14 rounded-2xl flex justify-center items-center text-white "
          >
            {" "}
             ورود دومرحله ای{" "}
          </Link>
        </div>
      );
    } else if (location === "/StudentPanel/security/TwoStepVerification") {
      return (
        <div className="flex flex-col gap-5 pt-20 pr-5 font-DanaFaNum-600 ">
          <Link to="/StudentPanel/security" className="bg-blue opacity-[20%]  w-32 h-14 rounded-2xl flex justify-center items-center text-white ">
            {" "}
            تغییر رمزعبور{" "}
          </Link>
          <Link to="/StudentPanel/TwoStepVerification" className="bg-blue w-32 h-14 rounded-2xl flex justify-center items-center text-white ">
            {" "}
             ورود دو مرحله ای{" "}
          </Link>
        </div>
      );
    }
  };

  return (
    <>
    <div className="flex"> 
      <div className="h-14 flex justify-center items-center gap-6 pt-24 pr-10">
        {handleSteps(locationPath)}
      </div>

      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>  
    </>
  );
};

export default NavigationsPage;
