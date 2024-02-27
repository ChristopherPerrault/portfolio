"use client";
import Link from "next/link";
import Image from "next/image";
import GitHubLogo from "../../_assets/images/github-mark-white.png";
import LinkedInLogo from "../../_assets/images/In-White-72-╬ô├ñ├│.png";
// import { useLanguage } from "../../languageContext";

export default function SocialLinks() {
//   const { lang } = useLanguage();
  const  lang  = true;

  return (
    <h1 className="flex flex-row justify-center my-16 text-5xl">
      {lang ? "Visit my Github" : "Visitez mon Github"}
      <Link
        href={"https://github.com/ChristopherPerrault"}
        className="-mt-2 mx-2 hover:border hover:border-[--secondary-yellow] hover:rounded-lg"
      >
        <Image
          src={GitHubLogo}
          width={66}
          height={66}
          alt="Github logo"
          title={lang ? "Visit my GitHub profile" : "Visitez mon profil GitHub"}
          className="m-1 mx-4 cursor-pointer"
        />
      </Link>
      <div className="mx-4 w-0.5 bg-black"></div>
      <Link
        href={"https://www.linkedin.com/in/christopherperrault/"}
        className="-mt-2 mx-2 hover:border hover:border-[--secondary-yellow] hover:rounded-lg"
      >
        <Image
          src={LinkedInLogo}
          width={70}
          height={70}
          alt="LinkedIn logo"
          title={lang ? "Visit my LinkedIn" : "Visitez mon LinkedIn"}
          className="m-1 mx-4 cursor-pointer"
        />
      </Link>
      {lang ? "Visit my LinkedIn" : "Visitez mon LinkedIn"}
    </h1>
  );
}
