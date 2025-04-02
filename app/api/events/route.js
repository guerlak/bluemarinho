import { NextResponse } from "next/server";

export async function GET() {

  //const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");

  const data = [
    {
      local: "Botafogo-RJ",
      nome: "Macaco Caolho",
      data: new Date("2025, 04, 25").toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
      }),
      slug: "macaco",
      url: "https://www.instagram.com/macacocaolhopub/",
    },
    {
      local: "São Conrado-RJ",
      nome: "Quiqui",
      data: new Date("2025, 04, 26").toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
      }),
      slug: "quiqui",
      url: "https://www.instagram.com/quiquirio/",
    }
  ];

  return NextResponse.json(data);
}
