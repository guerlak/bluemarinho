import { NextResponse } from "next/server";

export async function GET(req) {
  const data = [
    {
      local: "Vg. Pequena-RJ",
      nome: "ZZ Festival",
      data: "26/10",
      slug: "zz-festival",
      url: "https://shotgun.live/festivals/zz-fest-primavera?utm_source=blue-marinho",
    },
  ];

  return NextResponse.json(data);
}
