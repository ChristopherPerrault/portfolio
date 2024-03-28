"use client";

import ProjectCard from "./_components/projects/ProjectCard";
import ProjectsIntro from "./_components/projects/ProjectsIntro";

import { useLanguage } from "./languageContext";
import { kreon } from "./_assets/fonts/fonts";

// project asset imports
import imdbClone from ".//_assets/images/projects/imdb_clone.png";
import regexRecords from ".//_assets/images/projects/regexRecords.png";
import myPortfolio from ".//_assets/images/projects/MyPortfolio_960x920.png";
import ticketblaster from ".//_assets/images/projects/ticketblaster.png";
import joblink from ".//_assets/images/projects/joblink.png";
import clinic from ".//_assets/images/projects/clinic.png";
import dirToText from ".//_assets/images/projects/dirToTextCap.png";
import regexAcademy from ".//_assets/images/projects/regexAcademy.png";
import none from ".//_assets/images/projects/none.png";

export default function Projects() {
  const { lang }: { lang: boolean } = useLanguage();

  return (
    <>
      {/* projects page container div */}
      <div className={`${kreon.className}`}>
        <ProjectsIntro />

        {/* project cards container*/}
        <div
          className={"flex flex-col md:flex-row flex-wrap justify-center mx-24"}
        >
          <ProjectCard
            title="IMDb_Clone"
            imgSrc={imdbClone}
            mainTechs="Next.js, Typescript, Tailwind"
            description={lang ? "An IMDb Clone" : "Un clone d'IMDb"}
            points={
              lang
                ? [
                    "API usage",
                    "Responsive design",
                    "Custom errors & fallbacks",
                    "Light/Dark themes",
                  ]
                : [
                    "Utilisation des APIs",
                    "Design réactif",
                    "Erreurs personnalisées",
                    "Options de thème",
                  ]
            }
            url="https://imdb-clone-delta-beryl.vercel.app/"
            gitHubUrl="https://github.com/ChristopherPerrault/imdb_clone"
          />
          <ProjectCard
            title="Regex Records"
            imgSrc={regexRecords}
            mainTechs="React, Laravel, Tailwind"
            description={
              lang ? "A Discogs.com Clone" : "Un clone de Discogs.com"
            }
            points={
              lang
                ? [
                    "Restful APIs",
                    "Robust OAuth",
                    "Online payment",
                    "Marketplace & Social Media features",
                  ]
                : [
                    "APIs Restful",
                    "Authentification OAuth robuste",
                    "Paiement en ligne",
                    "Fonctionnalités de place de marché et de médias sociaux",
                  ]
            }
            // url="https://www.laravelprojectfsd05.com"
            // site is currently down (28/03/2024)
            url=""
            gitHubUrl="https://github.com/kevindarbydev/RegexRecords"
          />

          <ProjectCard
            title="TicketBlaster"
            imgSrc={ticketblaster}
            mainTechs="React, MongoDB, Custom CSS"
            description={
              lang
                ? "MERN stack ticketing app"
                : "Application de billetterie MERN"
            }
            points={
              lang
                ? ["User authentication", "Restful APIs", "Stripe Payment"]
                : [
                    "Authentification utilisateur",
                    "API RESTful",
                    "Paiement Stripe",
                  ]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/ticketblaster"
          />

          <ProjectCard
            title="JobLink"
            imgSrc={joblink}
            mainTechs="C#, ASP.NET Core, Entity Framework, Azure"
            description={lang ? "A LinkedIn Clone" : "Un clone de LinkedIn"}
            points={
              lang
                ? ["Robust OAuth", "LINQ", "CirrusUI", "Instant Messaging"]
                : [
                    "Robuste OAuth",
                    "LINQ",
                    "CirrusUI",
                    "Messagerie instantanée",
                  ]
            }
            url=""
            gitHubUrl="https://github.com/MattReda11/LinkedInClone"
          />

          <ProjectCard
            title="Portfolio"
            imgSrc={myPortfolio}
            mainTechs="Next.js, React, Typescript, Tailwind CSS"
            description={lang ? "You're on it!" : "Vous y êtes !"}
            points={
              lang
                ? ["Solo project", "Detail-oriented", "Fresh!"]
                : ["Projet solo", "Orienté vers les détails", "Frais!"]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/portfolio"
          />

          <ProjectCard
            title="Clinic"
            imgSrc={clinic}
            mainTechs="Java, Spring Boot, MySQL"
            description={lang ? "Hospital Booking" : "Réservation d'hôpital"}
            points={
              lang
                ? ["Spring Security", "Thymeleaf", "Multiple User Types"]
                : [
                    "Spring Security",
                    "Thymeleaf",
                    "Types d'utilisateurs multiples",
                  ]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/Clinic"
          />
          <ProjectCard
            title="TODO"
            imgSrc={none}
            mainTechs="React Native, Tailwind CSS, Expo"
            description={
              lang
                ? "Gamified ToDo Mobile App"
                : "Application mobile de liste de tâches gamifiée"
            }
            points={
              lang
                ? ["For learning purposes", "Cross-platform", "CRUD"]
                : ["À des fins d'apprentissage", "Multiplateforme", "CRUD"]
            }
            url=""
            gitHubUrl="https://github.com/SeenaSK/TODO"
          />
          <ProjectCard
            title="Used Cars"
            imgSrc={none}
            mainTechs="PHP, MySQL, Custom CSS"
            description={
              lang
                ? "Used Car Marketplace"
                : "Place de marché de voitures d'occasion"
            }
            points={
              lang
                ? ["User registration", "Form validation", "Marketplace"]
                : [
                    "Inscription utilisateur",
                    "Validation de formulaire",
                    "Place de marché",
                  ]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/UsedCars"
          />
          <ProjectCard
            title="DirToText"
            imgSrc={dirToText}
            mainTechs="C#, WPF, XAML"
            description={
              lang
                ? "Tool to export filenames"
                : "Outil d'exportation de noms de fichiers"
            }
            points={
              lang
                ? ["Solo project", "Simple software", "Original"]
                : ["Projet solo", "Logiciel simple", "Original"]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/DirToText"
          />
          <ProjectCard
            title="RegexAcademy"
            imgSrc={regexAcademy}
            mainTechs="C#, WPF, XAML"
            description={
              lang ? "School management system" : "Système de gestion scolaire"
            }
            points={lang ? ["OOP", "AzureDB"] : ["POO", "AzureDB"]}
            url=""
            gitHubUrl="https://github.com/kevindarbydev/RegexAcademy"
          />
        </div>
      </div>
    </>
  );
}
