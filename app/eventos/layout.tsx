import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:max-w-[1200px]  p-4 flex-1 flex justify-center m-auto">
            < Link href="/" >
                < FaArrowLeft className="my-8" size={30} />
            </Link >
            <div className="flex flex-col p-4 justify-center items-center m-auto">
                {children}
            </div>
        </div>
    );

}