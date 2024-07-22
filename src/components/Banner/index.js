import fs from "node:fs";

import bannerPic from "./pictures/guitars.jpeg";

export default function Banner() {
  const imgFolder = "public/pictures/home";

  console.log(imgFolder);
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
      className="w-full h-[300px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
    ></header>
  );
}
