"use client";

import { useLanguage } from "@/app/languageContext";
import { kreon } from "@/app/_assets/fonts/fonts";
import styles from "./page.module.css";
import CertCard from "@/app/_components/credentials/CertCard";
import InProgress from "@/app/_components/credentials/InProgress";
import Intro from "@/app/_components/credentials/Intro";
import Experience from "@/app/_components/credentials/Experience";

// cert asset imports
import fullstack from "../../_assets/images/certs/fullstack.jpg";
import frontend from "../../_assets/images/certs/frontend.jpg";
import software from "../../_assets/images/certs/software.jpg";
import udemyJS from "../../_assets/images/certs/Udemy-JS-cert.jpg";
import figma from "../../_assets/images/certs/LI-Figma.png";
import dataStructures from "../../_assets/images/certs/LI-DataStructures.png";
import Contributions from "@/app/_components/credentials/Contributions";

export default function Credentials() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <>
      {/* credentials page container div */}
      <div className={`${kreon.className}`}>
        <Intro />
        <Experience />

        {/* cert cards container*/}
        <div className="flex flex-col justify-center mx-24">
          <h2 className="text-3xl flex justify-center my-12 text-[color:var(--primary-yellow)]">
            {lang ? "Key Certifications:" : "Certifications clés :"}
          </h2>
          <CertCard
            title={lang ? "Full Stack Developer" : "Développeur Full Stack"}
            imgSrc={fullstack}
            date={lang ? "June 12, 2023" : "12 juin 2023"}
            issuer={lang ? "John Abbott College" : "CÉGEP John Abbott"}
            frame={`${styles.frame} ${styles.gold}`}
            desc={
              lang
                ? "1305 hours. A.E.C. From IT basics all the way to fully-planned, team-led MERN stack deployment"
                : "1305 heures. A.E.C. Des bases de l'informatique jusqu'au déploiement complet de la pile MERN, planifié entièrement par l'équipe"
            }
          />

          <CertCard
            title={
              lang ? "Front End Web Developer" : "Développeur Web Front-End"
            }
            imgSrc={frontend}
            date={lang ? "October 28, 2022" : "28 octobre 2022"}
            issuer={lang ? "John Abbott College" : "CÉGEP John Abbott"}
            frame={`${styles.frame} ${styles.gold}`}
            desc={
              lang
                ? "585 hours, Technical Training Certificate"
                : "585 heures, Certificat de formation technique"
            }
          />
          <CertCard
            title={lang ? "Software Development" : "Développement logiciel"}
            imgSrc={software}
            date={lang ? "June 5, 2023" : "5 juin 2023"}
            issuer={lang ? "John Abbott College" : "CÉGEP John Abbott"}
            frame={`${styles.frame} ${styles.gold}`}
            desc={
              lang
                ? "720 hours, Technical Training Certificate"
                : "720 heures, Certificat de formation technique"
            }
          />

          {/* Complementary Certifications */}

          <div className="flex justify-center my-6">
            <h2 className="text-[color:var(--primary-yellow)] my-20 text-4xl">
              {lang
                ? "Complementary Certifications:"
                : "Certifications complémentaires :"}
            </h2>
          </div>

          <CertCard
            title={lang ? "Javascript" : "Javascript"}
            imgSrc={udemyJS}
            date={lang ? "Feb 2, 2024" : "2 fév. 2024"}
            issuer="Udemy"
            desc={
              lang
                ? "~70 hours. From fundamentals through advanced topics"
                : "~70 heures. Des fondamentaux aux sujets avancés."
            }
            frame={`${styles.frame} ${styles.silver}`}
          />
          <CertCard
            title={
              lang
                ? "Data Structures & Algorithms in Java"
                : "Structures de données et algorithmes en Java"
            }
            imgSrc={dataStructures}
            date={lang ? "Nov 16, 2022" : "16 nov. 2022"}
            issuer="LinkedIn Learning"
            desc={
              lang
                ? "~5 hours. Fundamentals + practice."
                : "~5 heures. Fondamentaux + pratique."
            }
            frame={`${styles.frame} ${styles.bronze}`}
          />
          <CertCard
            title="Figma Essential Training: The Basics"
            imgSrc={figma}
            date={lang ? "Oct 23, 2023" : "23 oct. 2023"}
            issuer="LinkedIn Learning"
            desc={
              lang
                ? "~1.5 hours of practice & understanding why it's a top choice for planning projects"
                : "~1,5 heure de pratique et compréhension de pourquoi c'est un choix de premier plan pour la planification de projets"
            }
            frame="frame bronze-frame"
          />
        </div>
        <Contributions />
        <InProgress />
      </div>
    </>
  );
}
