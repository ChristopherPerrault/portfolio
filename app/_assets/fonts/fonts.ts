import { Handjet, DotGothic16, Kreon } from "next/font/google";

//?  This file serves as the entry point for fonts

// handjet is hero (name) pixelated font
export const handjet = Handjet({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// dotGothic16 is header nav, LangToggle & Footer pixelated font
export const dotGothic16 = DotGothic16({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// kreon is for all other content
export const kreon = Kreon({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
