import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../../../redux/themeSlice";

const ThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button
      className="w-12 h-12 min-w-0 p-0 rounded-full border border-gray-400 bg-black dark:bg-white flex justify-center items-center cursor-pointer overflow-hidden"
      onClick={() => dispatch(themeSlice.actions.toggleTheme())}
    >
      {theme === "dark" ? (
        <Moon02Icon className="size-6 text-white dark:text-black" />
      ) : (
        <Sun03Icon className="size-6 dark:text-black text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
