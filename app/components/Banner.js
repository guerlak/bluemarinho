import Image from "next/image";

import bannerPic from "../../public/pictures/home/guitars.jpeg";

import logo from "../../public/pictures/logo3.png";

export default function Banner() {
  const imgFolder = "public/pictures/home";

  const pics = [];

  const selectedPic = Math.floor(Math.random() * pics.length);

  //fs.readdirSync(imgFolder).forEach((file) => {
  // pics.push(file);
  //});

  return (
    <div
      style={{
        backgroundImage: `url(${bannerPic.src})`,
      }}
      className="flex bg-cover bg-center bg-no-repeat justify-center items-center h-[500px] w-full"
    >
      <Image
        src={logo}
        height={300}
        fill={false}
        style={{ width: "80%", maxHeight: "400px" }}
        alt="Blue Marinho Logo"
      />
    </div>
  );
}
