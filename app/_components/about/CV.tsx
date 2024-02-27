"use client";
import { useLanguage } from "@/app/languageContext";

export default function CV() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-row justify-center py-6 mx-48 my-32 text-5xl border-4 border-black rounded-lg bg-neutral-600">
      <p>
        📄 &nbsp;
        {lang ? "Download my CV in " : "Téléchargez mon CV en "}
        &nbsp;
        <a
          href="/EN-CV.pdf"
          download="EN-CV.pdf"
          className="-ml-6 px-2 pb-1 text-[--secondary-yellow] hover:border hover:border-[--secondary-yellow] hover:rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
          title="CV (EN)"
        >
          {lang ? "English" : "anglais"}
        </a>
        {lang ? " or in " : " ou en "}
        <a
          href="/FR-CV.pdf"
          download="FR-CV.pdf"
          className="px-2 pb-1 text-[--secondary-yellow] hover:border hover:border-[--secondary-yellow] hover:rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
          title="CV (FR)"
        >
          {lang ? "French" : "francais"}
        </a>
        &nbsp;
      </p>
    </div>
  );
}
