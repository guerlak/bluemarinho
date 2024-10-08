import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="flex justify-around items-center my-10 flex-col sm:flex-row ">
      <SocialIcons size={50} className="w-80" />

      <div className="mt-4">
        <div className="text-center text-gray-300">
          <p>CONTATO PARA SHOWS</p>
          <p>Filipe: (21) 98844-4059</p>
          <p>bandabluemarinho@gmail.com</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
