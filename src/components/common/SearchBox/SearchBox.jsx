import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { coursSortFilDataSlice } from "../../../redux/coursSortFilDataSlice";
import { newsSortFilDataSlice } from "../../../redux/newsSortFilDataSlice";

const SearchBox = ({ isCourse }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ direction: "rtl" }}>
      <form
        className="w-full max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
          setTimeout(() => {
            if (isCourse) {
              dispatch(
                coursSortFilDataSlice.actions.searchCourse(e.target[0].value)
              );
            } else {
              dispatch(
                newsSortFilDataSlice.actions.searchNews(e.target[0].value)
              );
            }
          }, 500);
        }}
        onChange={(e) => {
          e.preventDefault();
          setTimeout(() => {
            if (isCourse) {
              dispatch(
                coursSortFilDataSlice.actions.searchCourse(e.target[0].value)
              );
            } else {
              dispatch(
                newsSortFilDataSlice.actions.searchNews(e.target[0].value)
              );
            }
          }, 500);
        }}
      >
        <div className="flex w-full">
          <div className="relative w-full">
            <input
              type="search"
              name="searchCourse"
              id="search-course"
              className="block p-2.5 w-full z-20 text-sm text-gray-500 bg-gray-200 rounded-2xl border border-gray-300 focus:ring-blue focus:border-blue dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue"
              placeholder={
                isCourse
                  ? "دوره مورد نظر را جست‌جو کنید..."
                  : "مقاله مورد نطر را جستجو کنید ..."
              }
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
