import { ReactNode } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <main className="p-10 md:px-60">{children}</main>
      <Footer />
    </>
  );
}
