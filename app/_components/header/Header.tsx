"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { handjet, dotGothic16 } from "../../_assets/fonts/fonts";
import LangToggle from "./LangToggle";
import { useLanguage } from "../../languageContext";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
export default function Header() {
  const { lang } = useLanguage();

  // used to highlight nav tab based on current page
  const pathname = usePathname();

  // gradient color cycle for header text
  const range = "from-yellow-500 to-yellow-300";

  const gradient1 = `text-transparent bg-clip-text bg-gradient-to-b ${range}`;
  const gradient2 = `text-transparent bg-clip-text bg-gradient-to-tr ${range}`;
  const gradient3 = `text-transparent bg-clip-text bg-gradient-to-l ${range}`;
  const gradient4 = `text-transparent bg-clip-text bg-gradient-to-bl ${range}`;
  const gradient5 = `text-transparent bg-clip-text bg-gradient-to-t ${range}`;
  const gradient6 = `text-transparent bg-clip-text bg-gradient-to-br ${range}`;
  const gradient7 = `text-transparent bg-clip-text bg-gradient-to-r ${range}`;
  const gradient8 = `text-transparent bg-clip-text bg-gradient-to-tl ${range}`;

  const [color, setColor] = useState(gradient1);

  // Gradients for func changeColor in useEffect
  const gradients = [
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
  const delay = 1000;
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
      <LangToggle />
      <h1
        // text-custom10rem is modified in tailwind.config
        className={`${handjet.className} text-custom10rem uppercase ${color} flex justify-center flex-wrap mt-10 mb-20 select-none`}
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
