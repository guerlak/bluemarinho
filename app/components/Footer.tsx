import Link from "next/link";
import { FaArrowRight, FaRegRegistered } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">
      <div className="flex items-center">
        <h1>Blue Marinho</h1>
        <span className="ml-2">
          <FaRegRegistered />
        </span>
      </div>
    </div>
  );
}
