import { NextResponse } from "next/server";
import sharp from 'sharp'
import { createApi } from 'unsplash-js';

export const GET = async (req, res) => {
  const width = 500;
  const height = 500;
  let buffer;

  const unsplash = createApi({
    accessKey: process.env.NEXT_UNSPLASH_API_KEY,
  });

  try {   
    const response = await fetch("https://api.unsplash.com/photos/random/?query=portrait&client_id=" + process.env.NEXT_UNSPLASH_API_KEY, { next: { revalidate: 0 } })
    const responseJSON = await response.json();
    const imageURL = `${responseJSON.urls.raw}&fit=crop&crop=faces&w=500&h=500`;

    return NextResponse.json({ imageURL });
  } catch (error) {
    console.error("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};