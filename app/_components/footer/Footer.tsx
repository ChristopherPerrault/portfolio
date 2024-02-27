"use client";
import Link from "next/link";
import Image from "next/image";
import GitHubLogo from "../../_assets/images/github-mark-white.png";
import LinkedInLogo from "../../_assets/images/In-White-72-╬ô├ñ├│.png";
import { offside } from "../../_assets/fonts/fonts";
import BackToTop from "./BackToTop";
import { useLanguage } from "@/app/languageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { lang } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <>
      <BackToTop />
      <footer className="flex justify-center align-bottom">
        <div className="relative">
          <h1
            className={`${offside.className} flex flex-row text-2xl text-black tracking-tight hover:text-[color:var(--secondary-yellow)]`}
          >
            {lang ? "Christopher Perrault" : "Christopher PERRAULT"},{" "}
            {currentYear}
            <Link href={"https://github.com/ChristopherPerrault"}>
              <div className={`${styles["tooltip-container"]}`}>
                <Image
                  src={GitHubLogo}
                  width={30}
                  height={30}
                  alt="Github logo"
                  title={
                    lang
                      ? "Visit my GitHub profile"
                      : "Visitez mon profil GitHub"
                  }
                  className="m-1 mx-3 cursor-pointer"
                />
                <div className={`${styles.tooltip}`}>Github</div>
              </div>
            </Link>
            <Link href={"https://www.linkedin.com/in/christopherperrault/"}>
              <div className={`${styles["tooltip-container"]}`}>
                <Image
                  src={LinkedInLogo}
                  width={30}
                  height={30}
                  alt="LinkedIn logo"
                  title={
                    lang
                      ? "Visit my LinkedIn profile"
                      : "Visitez mon profil LinkedIn"
                  }
                  className="m-1 mt-1.5 cursor-pointer"
                />
                <div className={`${styles.tooltip}`}>LinkedIn</div>
              </div>
            </Link>
          </h1>
        </div>
      </footer>
    </>
  );
}
