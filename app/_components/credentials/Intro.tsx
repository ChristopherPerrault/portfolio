"use client";
import Link from "next/link";
import { useLanguage } from "@/app/languageContext";

export default function Intro() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div className="flex flex-col flex-wrap justify-center mx-60 text-[color:var(--primary-yellow)] my-24 text-5xl">
      <h2>
        {lang
          ? `As a proud graduate of John Abbott College, having achieved Dean's List recognition for my final two semesters, I gladly show here not only the actual diploma and technical certs I've earned, but also the ones I've been working on since. Check my `
          : `En tant que fier diplômé du Collège John Abbott, ayant obtenu une mention sur la liste du doyen pour mes deux derniers semestres, je montre avec plaisir ici non seulement le diplôme réel et les certifications techniques que j'ai obtenus, mais aussi ceux sur lesquels je travaille depuis. Consultez ma `}
        <Link className="hover:text-[--secondary-yellow]" href="/">
          {lang ? "About page" : "page À propos"}
        </Link>{" "}
        {lang
          ? `for specific technologies I work with!`
          : `pour connaître les technologies spécifiques avec lesquelles je travaille !`}
      </h2>

      <h2 className="text-3xl flex justify-center mt-12">
        {lang ? "Key Certifications:" : "Certifications clés :"}
      </h2>
    </div>
  );
}
