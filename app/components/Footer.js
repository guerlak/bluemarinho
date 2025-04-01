import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="flex items-center justify-around my-10 flex-col sm:flex-row ">
      <SocialIcons size={50} />

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
