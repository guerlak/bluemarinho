import { Rock_Salt } from "next/font/google";
import fs from "fs";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";
import SocialIcons from "./components/SocialIcons";

const rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const imgFolder = "./public/pictures/home";
  const pics: string[] = [];

  fs.readdirSync(imgFolder).forEach((file) => {
    pics.push("/pictures/home/" + file);
  });

  const selectedPic = Math.floor(Math.random() * pics.length);

  return (
    <div className="mx-auto text-center flex-col items-center justify-center [&>*]:mb-14 max-w-[1200px]">
      <header className="flex flex-col justify-around w-full h-[300px] sm:h-[500px]">
        <div className="flex justify-between items-center min-h-20 px-4">
          <h1>Blue Marinho</h1>
          <SocialIcons size={30} />
        </div>

        <div
          style={{ backgroundImage: `url(${pics[selectedPic]})` }}
          className="w-full h-[300px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
        ></div>
      </header>

      <h2 className="px-8">
        Blue Marinho, um quinteto composto pela voz poderosa e envolvente de
        Paola Marinho e uma banda potente que apresenta uma rica mistura de
        releituras de clássicos do rock e blues.
      </h2>

      <div className="min-h-96 flex flex-wrap w-full [&>*]:p-4 justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kd57l2z8Pz8?si=nXMj9Ox2HBOpHBaU"
          title="Video Youtube Blue Marinho"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7CZE-nETrN8?si=r9yDEs3kVdvADi1T"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <br />
        <h1 className="p-4 ">PRÓXIMOS SHOWS</h1>
        <Agenda />
      </div>

      <Footer />
    </div>
  );
}
