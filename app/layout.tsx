import type { Metadata } from "next";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import { LanguageProvider } from "./languageContext";
// import Providers from "./Providers";
import "./globals.css";

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
          {/* <Providers> */}
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
          {/* </Providers> */}
        </div>
      </body>
    </html>
  );
}
