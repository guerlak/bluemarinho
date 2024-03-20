import { Rock_Salt } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('/galeria/guitars.jpeg')] flex justify-center items-center  h-screen">
      <div className="bg-gray-800 rounded-tr-lg sm:w-2/4 w-4/5 p-10 opacity-70 text-gray-100 text-center">
        <h1 className="mb-10 flex items-center justify-center text-2xl">
          <span className="px-2 ">SITE EM CONSTRUÇÃO</span>
        </h1>
        <p className="text-1xl">
          Em breve você vai conferir agenda de shows, videos e informações da banda por aqui...
        </p>
        <br />
        <div className="flex items-center float-end hover:opacity-40 text-lg">
          <Link href="/release" className="px-2">release</Link><FaArrowRight />
        </div>
      </div>
    </div>
  );
}
