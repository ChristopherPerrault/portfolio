"use client";
import { useLanguage } from "@/app/languageContext";

export default function ProjectsIntro() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div className="flex flex-col flex-wrap justify-center mx-60 text-[color:var(--primary-yellow)] my-24 text-5xl">
      <h2 className="my-4">
        {lang
          ? "Welcome to my portfolio showcase! Here, you'll find a curated collection of projects that I've had the privilege to work on or collaborate with talented individuals. Explore this page to discover the diverse range of endeavors I've been involved in, and gain insights into my skills, expertise, and dedication to delivering impactful results."
          : "Bienvenue sur mon portfolio ! Ici, vous trouverez une collection sélectionnée de projets sur lesquels j'ai eu le privilège de travailler ou de collaborer avec des personnes talentueuses. Explorez cette page pour découvrir la diversité des projets auxquels j'ai participé et pour obtenir des informations sur mes compétences, mon expertise et mon dévouement à fournir des résultats significatifs."}
      </h2>
    </div>
  );
}
