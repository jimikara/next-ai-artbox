import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import sharp from 'sharp'
import { saveImageDataToCache } from "@/utils/image";

export const POST = async (req, res) => {
  const width = 500;
  const height = 500;
  const formData = await req.formData();

  const file = formData.get("imageFile");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = await sharp(await file.arrayBuffer())
        .resize(width, height)
        .toBuffer();
  const filename = Date.now() + '_' + file.name.replaceAll(" ", "_");

  try {
    // await writeFile(
    //   path.join(process.cwd(), "public/uploads/" + filename),
    //   buffer
    // );

    saveImageDataToCache(buffer, filename)

    return NextResponse.json({
      Message: "Success", 
      data: { 
        filename 
      }, 
      status: 201
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};