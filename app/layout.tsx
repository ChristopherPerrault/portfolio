import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
