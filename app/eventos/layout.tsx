import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:w-[1200px] p-5 lg:p-10 flex-1 flex-col justify-center m-auto">
            <Link href="/" >
                <FaArrowLeft className="my-8" size={30} />
            </Link>
            <div className="mt-20">
                {children}
            </div>
        </div>
    );

}