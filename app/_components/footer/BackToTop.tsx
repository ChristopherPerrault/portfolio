"use client";
import UpArrow from "../../_assets/images/up-circular-128.ico";
import Image from "next/image";
import { offside } from "../../_assets/fonts/fonts";
import { useLanguage } from "@/app/languageContext";

export default function BackToTop() {
  const { lang } = useLanguage();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-row justify-end mr-2.5 -mb-9 select-none">
      <div className="tooltip-container">
        <button onClick={scrollToTop}>
          <Image
            src={UpArrow}
            width={50}
            height={50}
            alt={lang ? "Scroll To Top Arrow" : "Flèche pour remonter"}
          />
        </button>
        <div className={`${offside.className} tooltip text-xl`}>
          {lang ? "Go to top" : "Revenir en haut"}
        </div>
      </div>
    </div>
  );
}
