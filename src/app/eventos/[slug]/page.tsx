"use client";

import { usePathname } from "next/navigation";

const eventoPage = async () => {
  const slug = usePathname();

  console.log("slug", slug);

  return (
    <div className="">
      <h1>Em breve mais informações...</h1>
    </div>
  );
};

export default eventoPage;
