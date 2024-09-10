import SocialIcons from "../SocialIcons";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-between items-center min-h-20 px-4 lg:px-[200px]">
      <Link href={"/"}>
        <h1>Blue Marinho</h1>
      </Link>
      <SocialIcons size={30} />
    </div>
  );
}
