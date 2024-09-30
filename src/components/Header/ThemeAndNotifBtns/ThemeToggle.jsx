import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import { useTheme } from "next-themes";
import React from "react";
import ButtonSpecial from "../../common/ButtonSpecial";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
      <ButtonSpecial
        className="w-12 h-12 min-w-0 p-0 rounded-full border border-gray-400 bg-black dark:bg-white flex justify-center items-center cursor-pointer overflow-hidden"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        innerHtml={(theme == "dark" ? <Sun03Icon className="size-6 dark:text-black" /> : <Moon02Icon className="size-6 text-white" />)}
      >
      </ButtonSpecial>
  );
};

export default ThemeToggle;
