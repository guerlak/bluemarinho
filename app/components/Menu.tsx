import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Menu({ page, children }: any) {

    return (
        <>
            <nav className="flex justify-between items-center px-5">
                <ul className="flex">
                    <li className="p-5 hidden">
                        {
                            page == "home" ? <Link href="/" className="text-gray-500">home</Link> : <Link href="/" >home</Link>
                        }
                    </li>
                    <li className="p-5">
                        {
                            page == "galeria" ? <Link href="/" className="text-gray-500">galeria</Link> : <Link href="/galeria" >galeria</Link>
                        }
                    </li>
                    <li className="p-5">
                        {
                            page == "release" ? <Link href="/" className="text-gray-500">release</Link> : <Link href="/release" >release</Link>
                        }
                    </li>
                </ul >
                <div className="flex">
                    <a href="https://www.youtube.com/@BlueMarinho" target="_blank" rel="noopener noreferrer" className="p-2"><FaYoutube size={34} /></a>
                    <a href="https://www.instagram.com/bandabluemarinho/" target="_blank" rel="noopener noreferrer" className="p-2"><FaInstagram size={34} /></a>
                </div>
            </nav >
            {children}
        </>
    )
}

export default Menu;