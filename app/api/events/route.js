import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      local: "São Conrado-RJ",
      nome: "Quiqui",
      data: "26/04",
      slug: "quiqui",
      url: "https://www.instagram.com/quiquirio/",
    },
  ];

  return NextResponse.json(data);
}
