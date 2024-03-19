import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialIcons({ size }: any) {
  return (
    <div className="flex">
      <a href="https://www.youtube.com/@BlueMarinho" target="_blank" rel="noopener noreferrer" className="p-2"><FaYoutube size={size} /></a>
      <a href="https://www.instagram.com/bandabluemarinho/" target="_blank" rel="noopener noreferrer" className="p-2"> <FaInstagram size={size} /></a>
    </div>
  )

}