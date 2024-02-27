"use client";
import Link from "next/link";
// import { useLanguage } from "@/app/languageContext";

export default function Intro() {
  //   const { lang } = useLanguage();
  const lang = true;
  const age =
    new Date().getFullYear() - 1986 - (new Date().getMonth() < 5 ? 1 : 0);

  return (
    <div className="flex flex-col justify-center m-20">
      <h1 className="text-5xl">
        {lang
          ? `Hey ! I'm Chris, a ${age} year old Montreal resident who writes computer code! I pivoted towards full stack development from a career in cooking and it suits me well.`
          : `Salut ! Moi, c'est Chris, un résident de Montréal de ${age} ans qui code ! J'ai fait le saut vers le développement full stack après une carrière en cuisine et ça me convient parfaitement.`}
      </h1>
      <h1 className="my-6 text-5xl">
        {lang
          ? "My hobbies include video games, lock picking,"
          : "Mes passe-temps incluent les jeux vidéo, le crochetage,"}
        &nbsp;
        <Link
          href={"https://callmestevepunk.bandcamp.com/album/take-one"}
          className="hover:text-[--secondary-yellow]"
          title={
            lang ? "Listen to us on Bandcamp" : "Écoutez-nous sur Bandcamp"
          }
        >
          {lang
            ? "being in a punk rock band"
            : "être dans un groupe de punk rock"}
        </Link>
        &nbsp;
        {lang ? "and visiting thrift stores." : "et visiter des friperies."}
      </h1>
    </div>
  );
}
