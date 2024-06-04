import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="flex justify-center p-10">
      <Link href={"/"}>
        <div className="flex items-center">
          <h1>Blue Marinho</h1>
          <span className="ml-2">
            <FaRegRegistered />
          </span>
        </div>
      </Link>
    </div>
  );
}
