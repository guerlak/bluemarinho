import { Rock_Salt } from "next/font/google";

import Banner from "../components/Banner";
import Agenda from "../components/Agenda";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />

      <section className="md:max-w-[1200px] flex-col items-center justify-center m-auto [&>*]:mb-10 mt-10 p-2">
        <h2>
          Blue Marinho, um quinteto composto pela voz poderosa de Paola Marinho
          e uma banda potente que apresenta uma rica mistura de releituras de
          clássicos do rock e blues.
        </h2>

        <div className="flex items-center justify-center text-2xl ">
          <Link href={"/quem-somos"}>
            <div className="flex hover:opacity-50 items-center border rounded-sm p-3">
              <span className="mx-1 ">Quem Somos</span>
              <FaArrowRight />
            </div>
          </Link>
        </div>

        <div className="min-h-96 flex flex-wrap w-full gap-4 justify-center">
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
        <Agenda />
      </section>
    </>
  );
}
