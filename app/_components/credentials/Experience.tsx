"use client";
import { useLanguage } from "@/app/languageContext";
import ExpCard from "./ExpCard";

export default function Experience() {
  const { lang }: { lang: boolean } = useLanguage();
  return (
    <>
      <h2 className="text-4xl flex justify-center my-12 text-[color:var(--primary-yellow)]">
        {lang ? "Experience:" : "Expérience:"}
      </h2>

      <ExpCard
        workplace={(lang ? "Internship" : "Stage") + ": Green Ascot LLC, VR/AI"}
        role={lang ? "C# Developer" : "Développeur C#"}
        date={lang ? "March-June 2023" : "Mars-Juin 2023"}
        description={
          lang
            ? "Contributed to the functionality of biomanufacturing equipment within a VR scene, using C# and Unity, featuring daily scrums and weekly sprints. An incredible, cutting-edge project I'm very proud to talk about."
            : "Contribué à la fonctionnalité d'équipement de biofabrication dans une scène de réalité virtuelle (VR) en utilisant C# et Unity, comprenant des scrums quotidiens et des sprints hebdomadaires. Un projet incroyable et innovant dont je suis très fier de parler."
        }
      />
    </>
  );
}
