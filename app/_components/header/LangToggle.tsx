import { dotGothic16 } from "@/app/_assets/fonts/fonts";
import { useLanguage } from "@/app/languageContext";

export default function LangToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="flex justify-end m-2 group">
      <button
        onClick={toggleLang}
        className={`group rounded-full border-4 border-black p-4 bg-gradient-to-br from-yellow-300 to-yellow-600 ${dotGothic16.className} text-3xl group-hover:bg-gradient-to-br group-hover:from-yellow-500 group-hover:to-yellow-400 select-none`}
      >
        {lang ? "FRANCAIS" : "ENGLISH"}
      </button>
    </div>
  );
}
