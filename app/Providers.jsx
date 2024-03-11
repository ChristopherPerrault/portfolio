"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="text-black transition-colors duration-200 dark:bg-purple-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
