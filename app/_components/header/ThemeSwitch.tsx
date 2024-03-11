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
    <div className="text-5xl m-4 mt-6 cursor-pointer hover:text-amber-500">
      {mounted &&
        (currentTheme === "dark" ? (
          <HiOutlineLightBulb onClick={() => setTheme("light")} />
        ) : (
          <MdOutlineDarkMode onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
}
