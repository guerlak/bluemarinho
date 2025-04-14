import { NextRequest, NextResponse } from "next/server";
import { data } from "../data";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const evento = data.find((evento) => evento.slug === slug);

    if (!slug) {
        return NextResponse.json(data, { status: 200 });
    }

    if (!evento) {
        return NextResponse.json({ message: "Evento não encontrado" }, { status: 404 });
    }

    return NextResponse.json(evento);
}