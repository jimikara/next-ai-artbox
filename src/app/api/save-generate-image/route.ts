import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
  // console.log("Request received", await req.formData());

  console.log("Request received", req.body);

  // const formData = await req.formData();

  // const file = formData.get("imageFile");
  // if (!file) {
  //   return NextResponse.json({ error: "No files received." }, { status: 400 });
  // }

  // const buffer = Buffer.from(image.base64, 'base64')
  // const filename = Date.now() + file.name.replaceAll(" ", "_");

  // try {
  //   await writeFile(
  //     path.join(process.cwd(), "public/output/" + filename),
  //     buffer
  //   );
  //   return NextResponse.json({ 
  //     Message: "Success", 
  //     data: { 
  //       filepath: "/output/" + filename 
  //     }, 
  //     status: 201
  //   });
  // } catch (error) {
  //   console.log("Error occured ", error);
  //   return NextResponse.json({ Message: "Failed", status: 500 });
  // }
};