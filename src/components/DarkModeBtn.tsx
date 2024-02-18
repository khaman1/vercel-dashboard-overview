"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

type Props = {};

const DarkModeBtn = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    // Your code to execute when the theme is changed
    if (theme === "dark") {
      setCurrentTheme("dark");
    } else if (theme === "light") {
      setCurrentTheme("light");
    }

    // You can perform any other actions here based on the new theme
  }, [theme]); // This effect will re-run whenever the 'theme' state changes

  return (
    <div>
      {/* <div>Current theme is {theme}</div> */}
      <section className="flex">
        <Button
          className={cn(
            "p-3 rounded-full text-gray-400 hover:text-white",
            currentTheme === "dark" ? "bg-gray-100" : "bg-transparent"
          )}
          onClick={() => setTheme("dark")}
        >
          <IoMoonOutline />
        </Button>

        <Button
          className={cn(
            "p-3 rounded-full text-gray-400 hover:text-white",
            currentTheme === "light" ? "bg-gray-800" : "bg-transparent"
          )}
          onClick={() => setTheme("light")}
        >
          <IoSunnyOutline />
        </Button>
      </section>
    </div>
  );
};

export default DarkModeBtn;
