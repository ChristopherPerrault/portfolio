import ProfilePic from "@/app/_components/about/ProfilePic";
import Intro from "@/app/_components/about/Intro";
import CV from "@/app/_components/about/CV";
import TechStack from "@/app/_components/about/TechStack";
import SocialLinks from "@/app/_components/about/SocialLinks";
import { kreon } from "@/app/_assets/fonts/fonts";

export default function About() {
  return (
    <div className={`${kreon.className}`}>
      <Intro />
      <CV />
      <SocialLinks />
      <TechStack />
      <ProfilePic />
    </div>
  );
}
