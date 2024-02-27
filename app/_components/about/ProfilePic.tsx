import Image from "next/image";
import profilePic from "../../_assets/images/profile_pic.jpg";

export default function ProfilePic() {
  return (
    <div className="flex justify-center my-20">
      <Image
        src={profilePic}
        width={600}
        height={600}
        alt="Photo of/de Chris Perrault"
        title="🔥🔥🔥"
        className="rounded-full"
      />
    </div>
  );
}
