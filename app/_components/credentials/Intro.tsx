"use client";
import Link from "next/link";
import { useLanguage } from "@/app/languageContext";

export default function Intro() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div className="flex flex-col flex-wrap justify-center mx-60 text-[color:var(--primary-yellow)] my-24 text-4xl">
      <h2>
        {lang
          ? `I'm a proud Full Stack Developer graduate of John Abbott College. Have a look below at my experience & ever-growing list of achievements! Check my `
          : `Je suis un fier diplômé en développement full stack du Cégep John Abbott. Explorez ci-dessous mon expérience et ma liste d'accomplissements en constante expansion ! Consultez ma `}
        <Link
          className="text-[--primary-bronze] hover:text-[--secondary-yellow]"
          href="/about"
        >
          {lang ? "About page" : "page À propos"}
        </Link>
        {lang
          ? ` for specific technologies I've worked with!`
          : ` pour découvrir les technologies spécifiques avec lesquelles j'ai travaillé !`}
      </h2>
    </div>
  );
}
