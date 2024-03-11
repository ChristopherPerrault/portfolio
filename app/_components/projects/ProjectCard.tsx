"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/app/languageContext";

interface ProjectCardProps {
  title: string;
  imgSrc: string | StaticImageData;
  mainTechs: string;
  description: string;
  points: string[];
  url: string;
  gitHubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  mainTechs,
  description,
  points,
  url,
  gitHubUrl,
}) => {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    // container div for top & bottom sides
    <div className="flex flex-col w-1/4 h-full m-8 my-6 border rounded-md shadow-xl border-neutral-950 bg-neutral-500">
      {/*  top side div */}
      <div className="w-full ">
        <Image
          src={imgSrc}
          //   width="full"
          // height="full"
          height={900}
          alt={lang ? "Project screenshot" : "Capture d'écran du projet"}
        />
      </div>

      {/*  bottom side div  */}
      <div className="flex flex-col flex-wrap w-3/4 m-4">
        <p className="my-2 text-5xl">{title}</p>
        <p className="my-2 text-3xl">{description}</p>
        <p className="my-2 text-4xl">{mainTechs}</p>

        <ul>
          {points.map((point, index) => (
            <li key={index} className="m-2 ml-6 text-xl list-disc">
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-col mt-8 text-2xl underline">
          {url && (
            <Link
              className="my-2 hover:text-[--secondary-yellow]"
              href={url}
              title={lang ? `Visit ${title}` : `Visitez ${title}`}
            >
              {lang ? `Visit ${title}` : `Visitez ${title}`}
            </Link>
          )}

          <Link
            className="hover:text-[--secondary-yellow]"
            href={gitHubUrl}
            title={lang ? "See on GitHub" : "Voir sur Github"}
          >
            {lang ? "See on GitHub" : "Voir sur Github"}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
