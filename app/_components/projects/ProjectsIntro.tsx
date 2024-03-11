"use client";
import { useLanguage } from "@/app/languageContext";

export default function ProjectsIntro() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div
      className="flex flex-col flex-wrap justify-center mx-60 text-[color:var(--primary-yellow)] my-24 text-5xl"
    >
      <h2 className="my-4">
        {lang
          ? "This page features some of the projects I've collaborated on or handled on my own. Each features a short description, the main technologies used, a few key points, and a link to GitHub where you can review the code behind the project. I'm happy to answer questions about any of these!"
          : "Cette page présente certains des projets sur lesquels j'ai collaboré ou que j'ai gérés seul. Chacun comporte une courte description, les principales technologies utilisées, quelques points clés et un lien vers GitHub où vous pouvez examiner le code du projet. Je suis heureux de répondre à vos questions sur l'un de ces projets !"}
      </h2>
    </div>
  );
}
