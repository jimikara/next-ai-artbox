import { NextRequest, NextResponse } from "next/server";
import sharp from 'sharp'
import { createApi } from 'unsplash-js';
import type { ErrorResponse } from "@/types";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const width = 500;
  const height = 500;
  let buffer;

  try {   
    const response = await fetch("https://api.unsplash.com/photos/random/?query=portrait&client_id=" + process.env.NEXT_UNSPLASH_API_KEY, { next: { revalidate: 0 } })
    const responseJSON = await response.json();
    let imageURL = null;

    if (responseJSON.urls?.raw) {
      imageURL = `${responseJSON.urls?.raw}&fit=crop&crop=faces&w=500&h=500`;
    }

    return NextResponse.json({ imageURL });
  } catch (error) {
    console.error("Error occured ", error);
    const errorResponse: ErrorResponse = {
      message: "Failed",
      status: 500,
    };
    return NextResponse.json("Error", errorResponse);
  }
};