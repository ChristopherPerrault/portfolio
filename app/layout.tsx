import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import { LanguageProvider } from "./languageContext";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Perrault | Portfolio",
  description:
    "Portfolio to showcase (my) projects & skills in full stack development",
  authors: [
    {
      name: "Christopher Perrault",
      url: "https://www.linkedin.com/in/christopherperrault/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="custom-border">
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
