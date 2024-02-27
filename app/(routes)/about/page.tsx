import ProfilePic from "@/app/_components/about/ProfilePic";
import IntroBlurb from "@/app/_components/about/Intro";
import CV from "@/app/_components/about/CV";
import TechStack from "@/app/_components/about/TechStack";
import SocialLinks from "@/app/_components/about/SocialLinks";
import { dotGothic16 } from "../../_assets/fonts/fonts";

export default function About() {
  return (
    <div className={`${dotGothic16.className}`}>
      <ProfilePic />
      <IntroBlurb />
      <CV />
      <SocialLinks />
      <TechStack />
    </div>
  );
}
