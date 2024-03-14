import Image from "next/image";
import profilePic from "../../_assets/images/profile_pic.jpg";

export default function ProfilePic() {
  return (
    <div className="flex justify-center my-20">
      <Image
        src={profilePic}
        width={500}
        height={500}
        alt="Photo of/de Chris Perrault"
        title="🔥🔥🔥"
        className="rounded-full"
      />
    </div>
  );
}
