"use client";
import TechCard from "./TechCard";
// import { useLanguage } from "@/app/languageContext";
export default function TechStack() {
//   const { lang } = useLanguage();
  const lang = true;
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="w-full my-16 text-5xl text-center">
        {lang ? "TECH STACK:" : "PILE TECHNOLOGIQUE :"}
      </h1>

      <TechCard
        title="FRONTEND"
        technologies={[
          "React (Next.js)",
          "Javascript, Typescript",
          "React Native",
          "HTML, XML, CSS",
          "Tailwind, MaterialUI, Bootstrap",
        ]}
      />
      <TechCard
        title="BACKEND"
        technologies={[
          "Java (Spring Boot, Hibernate)",
          "C# (.NET Core, Entity Framework)",
          "PHP (Laravel)",
        ]}
      />
      <TechCard
        title={lang ? "DATABASE" : "BASE DE DONNÉES"}
        technologies={["MySQL", "MongoDB", "SQLite"]}
      />
      <TechCard
        title="SERVER"
        technologies={["Node.js", "Express.js", "Mongoose", "ASP.NET Core"]}
      />
      <TechCard
        title={lang ? "TOOLS" : "OUTILS"}
        technologies={[
          "Git, GitHub, BitBucket",
          "AWS, Azure",
          lang ? "LLM/AI prompting" : "GÉNÉRATION LLM/IA",
          "Trello, Miro, Figma",
          "Postman",
          "VSCode, Visual Studio, IntelliJ IDEA",
        ]}
      />
      <TechCard
        title="CONCEPTS"
        technologies={
          lang
            ? [
                "Agile Methodologies, Scrum",
                "Object-Oriented Programming (OOP)",
                "Aspect-Oriented Programming (AOP)",
                "Event-driven programming",
                "Object-Relational Mapping (ORM)",
                "SEO",
              ]
            : [
                "Méthodologies Agiles, Scrum",
                "Programmation Orientée Objet (POO)",
                "Programmation Orientée Aspect (POA)",
                "Programmation Événementielle",
                "Mapping Objet-Relationnel (ORM)",
              ]
        }
      />
      <TechCard
        title={lang ? "OTHER" : "AUTRE"}
        technologies={[
          "Linux",
          "REST APIs, SOAP",
          lang
            ? "Unit Testing (Jest, PHPUnit, JUnit)"
            : "Tests Unitaires (Jest, PHPUnit, JUnit)",
          "CI/CD (Jenkins)",
          "WPF, XAML",
          "Parcel",
        ]}
      />
    </div>
  );
}
