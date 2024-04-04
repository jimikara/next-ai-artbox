import { NextRequest, NextResponse } from "next/server";
import { resizeImage } from "@/utils/image";
import type { ErrorResponse } from "@/types";

interface IImageResizeResponse {
  Message: string;
  status: number;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const width = 500;
  const height = 500;
  const formData = await req.formData();
  const file = formData.get("imageFile");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const blob = new Blob([file]);
    const buffer = await resizeImage(blob, width, height);
    const headers = new Headers();

    return new NextResponse(buffer, {
      status: 201,
      headers,
    });
  } catch (error) {
    console.error("Error occured ", error);

    const errorResponse: ErrorResponse = {
      message: "Failed",
      status: 500,
    };
    return NextResponse.json("Error" , errorResponse);
  }
};