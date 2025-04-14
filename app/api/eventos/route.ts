import { NextRequest, NextResponse } from "next/server";
import { data } from "./data"


export async function GET() {


  return NextResponse.json(data, { status: 200 });
}