"use client";

import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // used to bypass possible hydration error where the user comes onto the page with system settings, changes the theme and tries to navigate to another page
  useEffect(() => setMounted(true), []);

  const currentTheme = theme;

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <HiOutlineLightBulb
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdOutlineDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
