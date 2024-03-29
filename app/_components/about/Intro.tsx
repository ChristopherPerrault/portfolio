"use client";
import Link from "next/link";
import { useLanguage } from "@/app/languageContext";

export default function Intro() {
  const { lang }: { lang: boolean } = useLanguage();

  const age: number =
    new Date().getFullYear() - 1986 - (new Date().getMonth() < 5 ? 1 : 0);

  return (
    <div className="flex flex-col flex-wrap justify-center mx-60 text-[color:var(--primary-yellow)] my-24 text-4xl">
      <h1>
        {lang
          ? `Hey ! I'm Chris, a ${age} year old Montreal resident who writes computer code! I pivoted towards full stack development from a career in cooking and it suits me well.`
          : `Salut ! Moi, c'est Chris, un résident de Montréal de ${age} ans qui code ! J'ai fait le saut vers le développement full stack après une carrière en cuisine et ça me convient parfaitement.`}
      </h1>
      <h1 className="my-6">
        {lang
          ? "My hobbies include video games, lock picking,"
          : "Mes passe-temps incluent les jeux vidéo, le crochetage,"}
        &nbsp;
        <Link
          href={"https://callmestevepunk.bandcamp.com/album/take-one"}
          className="text-[--primary-bronze] hover:text-[--secondary-yellow]"
          title={
            lang ? "Listen to us on Bandcamp" : "Écoutez-nous sur Bandcamp"
          }
        >
          {lang
            ? "being in a punk rock band"
            : "être dans un groupe de punk rock"}
        </Link>
        &nbsp;
        {lang
          ? "and treasure hunting at thrift stores."
          : "et à la recherche de trésors dans les magasins d'occasion"}
      </h1>
    </div>
  );
}
