import { NextResponse } from "next/server";
import sharp from 'sharp'

export const POST = async (req, res) => {
  const width = 500;
  const height = 500;
  const formData = await req.formData();
  const file = formData.get("imageFile");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const buffer = await sharp(await file.arrayBuffer())
      .resize(width, height)
      .toBuffer();

    const headers = new Headers();

    headers.set("Content-Type", `image/${sharp(buffer).options.format}`);

    return new NextResponse(buffer, {
      status: 201,
      headers,
    });
  } catch (error) {
    console.error("Error occured ", error);
    return NextResponse.json("Error" ,{ Message: "Failed", status: 500 });
  }
};