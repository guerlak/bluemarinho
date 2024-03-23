import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-10 h-40 text-gray-200">
      <div>Blue Marinho®</div>
      <div>
        <div></div>
        <SocialIcons size={30} />
      </div>
    </div>
  );
}
