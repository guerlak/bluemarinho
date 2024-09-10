import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="flex justify-around my-10">
      <div className="w-80">
        <p>CONTATO PARA SHOWS</p>
        <p>Filipe: (21) 98844-4059</p>
        <p>bandabluemarinho@gmail.com</p>
      </div>

      <SocialIcons size={40} className="w-80" />
    </div>
  );
}
