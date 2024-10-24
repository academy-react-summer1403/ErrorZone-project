import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { coursSortFilDataSlice } from "../../../redux/coursSortFilDataSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div style={{ direction: "rtl" }}>
      <form
        className="w-full max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            coursSortFilDataSlice.actions.searchCourse(
              document.getElementById("search-dropdown").value
            )
          );
        }}
      >
        <div className="flex">
          {/* <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white"
          >
            {" "}
          </label> */}
          {/* <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-500 dark:text-gray-200"
              ariaLabelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ></button>
              </li>
            </ul>
          </div> */}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-500 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue"
              placeholder="دوره مورد نظر را جست‌جو کنید..."
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue rounded-2xl border border-blue hover:bg-blue focus:ring-1 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-blue dark:focus:ring-blue"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
