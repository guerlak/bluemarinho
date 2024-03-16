import { ReactNode } from "react";
import Menu from "../components/Menu";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            <main className="p-10 md:p-40">{children}</main>
        </>
    )
}
