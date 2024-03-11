"use client";
import { useLanguage } from "@/app/languageContext";

export default function InProgress() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div className="flex justify-center mx-28 text-[color:var(--primary-yellow)] text-3xl my-12">
      <h2 className="mx-20 mb-2">
        {lang
          ? "In Progress (updated March 2024)"
          : "En cours (mise à jour Mars 2024)"}
      </h2>
      <ul className="list-disc mx-28">
        <li>{lang ? "React, Udemy, 70+ hours" : "React, Udemy, 70+ heures"}</li>
        <li>
          {lang
            ? "Advanced CSS, LinkedIn Learning, 24+ hours"
            : "CSS avancé, LinkedIn Learning, 24+ heures"}
        </li>
        <li>
          {lang
            ? "GitHub Actions, LinkedIn Learning + Github, 8+ hours"
            : "GitHub Actions, LinkedIn Learning + Github, 8+ heures"}
        </li>
        <li>
          {lang
            ? "2 new Next.js portfolio projects by the end of this month!"
            : "2 nouveaux projets de portfolio Next.js d'ici la fin de ce mois !"}
        </li>
      </ul>
    </div>
  );
}
