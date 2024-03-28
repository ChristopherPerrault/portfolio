"use client";
import UpArrow from "../../_assets/images/up-circular-128.ico";
import Image from "next/image";

export default function BackToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-row justify-end mr-8 -mb-9 select-none">
      <div className="tooltip-container">
        <button onClick={scrollToTop}>
          <Image
            src={UpArrow}
            width={50}
            height={50}
            alt="Scroll To Top Arrow"
          />
        </button>
      </div>
    </div>
  );
}
