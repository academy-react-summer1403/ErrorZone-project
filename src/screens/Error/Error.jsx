import React from "react";
import { Link, useLocation, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error.message);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div class="text-center flex flex-col items-center">
        <h1 class="mb-4 text-7xl font-semibold text-red">ارور !</h1>
        <p class="mb-4 text-xl text-gray-600">صفحه مشکل داره داداچ !</p>
        <p class="mb-4 text-xl text-gray-600">{error.message}.</p>
        <div class="animate-bounce">
          <svg
            class="mx-auto h-24 w-24 text-red"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-gray-600">
          بیا برو
          <Link to={pathname == "/" ? "/StudentPanel" : "/"} class="text-red">
            {" "}
            خونه تون
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export { Error };
