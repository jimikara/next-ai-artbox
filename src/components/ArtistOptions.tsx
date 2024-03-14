"use client";

import Image from "next/image";
import { useContext } from "react";
import { ImageContext } from "@/components/Container";
// import { generateImage } from "@/utils/api";
import { generateImage } from "@/app/actions";
import { tester } from "@/utils/test";
import { artistDetails } from "@/constants/artistDetails";
import type { ImageContextType, TextPrompt } from "@/types";

const ArtistOptions = () => {
  const context = useContext(ImageContext) as ImageContextType;

  const handleClick = async (prompts: TextPrompt[]) => {
    console.log("PATH", context.uploadFilename);
    const image = await generateImage(prompts, context.uploadFilename);
    context.setGeneratedImagePath(image);
  };

  return (
    <div className='flex'>
      {artistDetails.map((option, index) => {
        return (
          <Image
            key={index}
            src={option.imageURL}
            width='60'
            height='60'
            alt={option.altText}
            className='rounded-full'
            role='button'
            onClick={() => handleClick(option.prompts)}
          ></Image>
        );
      })}
    </div>
  );
};

export default ArtistOptions;
