"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import LangToggle from "./LangToggle";
// import ThemeSwitch from "./ThemeSwitch";
import { useLanguage } from "../../languageContext";
import styles from "./header.module.css";
import { dotGothic16, handjet } from "@/app/_assets/fonts/fonts";

export default function Header() {
  const { lang }: { lang: boolean } = useLanguage();

  // used to highlight nav tab based on current page
  const pathname: string = usePathname();

  // gradient color cycle for header text
  const range: string = "from-yellow-500 to-yellow-300";
  const styling: string = "text-transparent bg-clip-text";

  const gradient1: string = `${styling} bg-gradient-to-b ${range}`;
  const gradient2: string = `${styling} bg-gradient-to-tr ${range}`;
  const gradient3: string = `${styling} bg-gradient-to-l ${range}`;
  const gradient4: string = `${styling} bg-gradient-to-bl ${range}`;
  const gradient5: string = `${styling} bg-gradient-to-t ${range}`;
  const gradient6: string = `${styling} bg-gradient-to-br ${range}`;
  const gradient7: string = `${styling} bg-gradient-to-r ${range}`;
  const gradient8: string = `${styling} bg-gradient-to-tl ${range}`;

  const [color, setColor] = useState(gradient1);

  // Gradients for func changeColor in useEffect
  const gradients: string[] = [
    gradient2,
    gradient3,
    gradient4,
    gradient5,
    gradient6,
    gradient7,
    gradient8,
    gradient1,
  ];

  // cycles header text gradients every second
  const delay: number = 1000;
  useEffect(() => {
    let i = 0;

    const changeColor = () => {
      setColor(gradients[i]);

      // Move to the next color or start over
      i = (i + 1) % gradients.length;
      setTimeout(changeColor, delay);
    };

    const colorChangeTimeout = setTimeout(changeColor, delay);

    return () => clearTimeout(colorChangeTimeout);
  }, []);

  return (
    <header>
      <div className="flex flex-row justify-end">
        {/* <ThemeSwitch /> */}
        <LangToggle />
      </div>
      <h1
        // text-custom10rem is modified in tailwind.config
        className={`${handjet.className} text-9xl uppercase ${color} flex justify-center flex-wrap mt-10 mb-20 select-none`}
      >
        Christopher Perrault
      </h1>
      <nav
        className={`${dotGothic16.className} text-5xl text-black flex justify-around m-2 select-none`}
      >
        <Link
          className={
            pathname === "/"
              ? "text-[--secondary-yellow] cursor-default"
              : `${styles.shadow} cursor-orangeLinkHand`
          }
          href="/"
        >
          {lang ? "Projects" : "Projets"}
        </Link>
        <Link
          className={
            pathname === "/about"
              ? "text-[--secondary-yellow] cursor-default"
              : `${styles.shadow} cursor-orangeLinkHand`
          }
          href="/about"
        >
          {lang ? "About" : "À propos"}
        </Link>
        <Link
          className={
            pathname === "/credentials"
              ? "text-[--secondary-yellow] cursor-default"
              : `${styles.shadow} cursor-orangeLinkHand`
          }
          href="/credentials"
        >
          {lang ? "Credentials" : "Accréditations"}
        </Link>
      </nav>
    </header>
  );
}
