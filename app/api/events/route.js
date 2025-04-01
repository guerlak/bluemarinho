import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      local: "Botafogo-RJ",
      nome: "Macaco Caolho",
      data: "25/04",
      slug: "macaco",
      url: "https://www.instagram.com/macacocaolhopub/",
    },
    {
      local: "São Conrado-RJ",
      nome: "Quiqui",
      data: "26/04",
      slug: "quiqui",
      url: "https://www.instagram.com/quiquirio/",
    }
  ];

  return NextResponse.json(data);
}
