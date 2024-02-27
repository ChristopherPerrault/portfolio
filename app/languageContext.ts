// "use client";
// import { createContext, useContext, useState } from "react";

// // file provides communication between bool value of langToggle button (found in my-portfolio\app\_components\header\langToggle.jsx) and rest of app via <LanguageProvider>, which wraps entire app in layout.js

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   // true = English, false = French
//   const [lang, setLang] = useState(true);

//   const toggleLang = () => {
//     setLang(!lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ lang, toggleLang }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };
