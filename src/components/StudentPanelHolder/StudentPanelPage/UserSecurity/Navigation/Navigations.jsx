import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const NavigationsPage = () => {
  const loc = useLocation();

  return (
    <>
      <div className="flex gap-10 justify-center items-center ">
        {/* <Link
        to={"./"}
        className={`px-3 py-4 w-full text-xs font-semibold  ${
          loc.pathname.toLowerCase().includes("./")
            ? "bg-green-500"
            : "bg-blue"
        } rounded-full flex items-center justify-center transition-all duration-300`}
      >
        تغییر رمز عبور
      </Link> */}
        <NavLink
          to="./"
          className={({ isActive }) =>
            isActive
              ? "bg-blue px-3 py-4  text-xs font-semibold rounded-3xl"
              : "bg-gray-400 px-3 py-4 w-full text-xs font-semibold"
          }
        >
          تغییر رمز عبور
        </NavLink>
        {/* <Link
        to={"./TwoStepVerification"}
        className={`px-3 py-4 w-full text-xs font-semibold  ${
          loc.pathname.toLowerCase().includes("changepassword")
            ? "bg-blue "
            : "bg-green-500 "
        } rounded-full flex items-center justify-center transition-all duration-300`}
      >
        احراز هویت دو مرحله ای
      </Link> */}

        <NavLink
          to="./TwoStepVerification"
          className={({ isActive }) =>
            isActive
              ? "bg-blue px-3 py-4  text-xs font-semibold rounded-3xl"
              : "bg-gray-200 px-3 py-4  text-xs font-semibold rounded-3xl"
          }
        >
          احراز هویت دو مرحله ای
        </NavLink>
      </div>
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </>
  );
};

export default NavigationsPage;
