import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../../../redux/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch()
console.log(theme);
  return (
    <button
      className="w-12 h-12 min-w-0 p-0 rounded-full border border-gray-400 bg-black dark:bg-white flex justify-center items-center cursor-pointer overflow-hidden"
      onClick={() => dispatch(themeSlice.actions.toggleTheme())}
    >
      {theme.theme === "light" ? (
        <Sun03Icon stroke="black" className="size-6 dark:text-black stroke-black" />
      ) : (
        <Moon02Icon className="size-6 text-white dark:text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
