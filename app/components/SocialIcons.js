import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialIcons({ size }) {
  return (
    <div className="flex">
      <a
        href="https://www.youtube.com/@BlueMarinho"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <FaYoutube size={size} />
      </a>
      <a
        href="https://www.instagram.com/bandabluemarinho/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        {" "}
        <FaInstagram size={size} />
      </a>
    </div>
  );
}
