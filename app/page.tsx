"use client";

import ProjectCard from "./_components/projects/ProjectCard";
import ProjectsIntro from "./_components/projects/ProjectsIntro";

// import { useLanguage } from "./languageContext";

// project asset imports
import regexRecords from ".//_assets/images/projects/regexRecords.png";
import myPortfolio from ".//_assets/images/projects/MyPortfolio_960x920.png";
import ticketblaster from ".//_assets/images/projects/ticketblaster.png";
import joblink from ".//_assets/images/projects/joblink.png";
import clinic from ".//_assets/images/projects/clinic.png";
import dirToText from ".//_assets/images/projects/dirToTextCap.png";
import regexAcademy from ".//_assets/images/projects/regexAcademy.png";
import none from ".//_assets/images/projects/none.png";

export default function Projects() {
  // const { lang } = useLanguage();
  const lang = true;
  return (
    <>
      {/* projects page container div */}
      <div>
        <ProjectsIntro />

        {/* project cards container*/}
        <div className="flex flex-row flex-wrap justify-center mx-24">
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
            url="https://www.laravelprojectfsd05.com"
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
            mainTechs="Next.js, React, Tailwind CSS"
            description={lang ? "You're on it!" : "Vous y êtes !"}
            points={
              lang
                ? ["Solo project", "Detail-oriented", "Fresh"]
                : ["Projet solo", "Orienté vers les détails", "Frais"]
            }
            url=""
            gitHubUrl="https://github.com/ChristopherPerrault/my-portfolio"
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
