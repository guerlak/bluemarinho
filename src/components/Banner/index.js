import Image from "next/image";

import bannerPic from "./pictures/guitars.jpeg";
import logo from "./pictures/logo3.png";

export default function Banner() {
  const imgFolder = "public/pictures/home";

  const pics = [];

  const selectedPic = Math.floor(Math.random() * pics.length);

  //fs.readdirSync(imgFolder).forEach((file) => {
  // pics.push(file);
  //});

  return (
    <header
      style={{
        backgroundImage: `url(${bannerPic.src})`,
      }}
      className="w-full h-[500px] sm:h-[500px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <Image src={logo} height={300} fill={false} style={{ width: "80%" }} />
    </header>
  );
}
