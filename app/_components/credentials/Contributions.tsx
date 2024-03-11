"use client";
import { useLanguage } from "@/app/languageContext";

export default function Contributions() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <div className="flex justify-center mx-28 text-[color:var(--primary-yellow)] text-3xl my-12">
      <h2 className="mx-20 mb-2">
        Bonus:
        {lang
          ? " Volunteered 5 days at ConFoo 2024, the full stack developer conference"
          : " Bénévolat pendant 5 jours à ConFoo 2024, la conférence des développeurs full stack."}
      </h2>
    </div>
  );
}
