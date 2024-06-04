import Link from "next/link";
import { FaArrowRight, FaRegRegistered } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex items-center justify-center">
        <h1>Blue Marinho</h1>
        <span className="ml-1">
          <FaRegRegistered />
        </span>
      </div>
    </div>
  );
}
