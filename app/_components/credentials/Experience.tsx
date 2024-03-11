"use client";
import { useLanguage } from "@/app/languageContext";

export default function Experience() {
  const { lang }: { lang: boolean } = useLanguage();
  return (
    <>
      <h2 className="text-3xl flex justify-center my-12">
        {lang ? "Experience:" : "Expérience:"}
      </h2>
    </>
  );
}
