"use client";
import { offside } from "../../_assets/fonts/fonts";
// import { useLanguage } from "@/app/languageContext";

export default function InProgress() {
//   const { lang } = useLanguage();
  const lang  = true;
  return (
    <div
      className={`${offside.className} flex flex-wrap flex-col justify-center mx-28 text-[color:var(--primary-yellow)] text-2xl my-12`}
    >
      <h2 className="mx-20 mb-2">
        {lang
          ? "In Progress (last updated Feb 2024):"
          : "En cours (dernière mise à jour Fev 2024) :"}
      </h2>
      <ul className="list-disc mx-28">
        <li>React, Udemy, 70+ hours, ~25% done!</li>
        <li>Advanced CSS, LinkedIn Learning, 24+ hours, ~50% done!</li>
        <li>
          GitHub Professional Cert, LinkedIn Learning/Github collab, 8+ hours,
          ~10% done!
        </li>
      </ul>
    </div>
  );
}
