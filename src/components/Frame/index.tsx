"use client";

import React from "react";
import { useContext, useState, useEffect } from "react";
import FrameSVG from "./svg";
import Image from "next/image";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Swoosh from "@/components/Swoosh";
import { ImageContext } from "@/components/ImageProvider";
import type { ImageContextType } from "@/types";
import classNames from "classnames";
import { robotoMono } from "@/utils/fonts";

interface IFrameProps {
  className?: string;
}

const Frame = ({ className }: IFrameProps) => {
  const {
    generatedImage,
    initialImage,
    setInitialImage,
    loading,
    setLoading,
    setError,
    error,
  } = useContext<ImageContextType>(ImageContext);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    const file = e.target.files?.[0];
    const formData = new FormData();

    if (!file) {
      setError("No files received.");
      setLoading(false);
      return;
    }

    formData.append("imageFile", file);

    const response = await fetch("/api/image-resize", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const imageURL = URL.createObjectURL(blob);
      setInitialImage(blob);
    } else {
      setError(response.statusText);
    }

    setLoading(false);
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    const response = await fetch("/api/random-image");

    if (response.ok) {
      const data = await response.json();
      const b = await fetch(data.imageURL);
      const blob = await b.blob();
      setInitialImage(blob);
    } else {
      console.error("Error occurred while fetching the image");
      setError(response.statusText);
    }

    setLoading(false);
  };

  const base64ToDataUrl = (base64: string) => {
    return `data:image/png;base64,${base64}`;
  };

  const containerClasses = classNames(
    "w-[340px]",
    "h-[340px]",
    "md:w-[400px]",
    "md:h-[400px]",
    "2xl:w-[480px]",
    "2xl:h-[480px]",
    "bg-white",
    "relative",
    "shadow-xl",
    className
  );

  const innerWrapperClasses = classNames(
    "absolute",
    "w-[218px]",
    "h-[218px]",
    "top-[61px]",
    "left-[61px]",
    "md:w-[242px]",
    "md:h-[242px]",
    "md:top-[79px]",
    "md:left-[79px]",
    "2xl:w-[264px]",
    "2xl:h-[264px]",
    "2xl:left-[108px]",
    "2xl:top-[108px]",
    "grid",
    "place-content-center"
  );

  return (
    <div className={containerClasses}>
      <FrameSVG className='shadow-xl' />
      <div className={innerWrapperClasses}>
        {loading && (
          <Loader text={Boolean(initialImage) ? "Generating" : "Loading"} />
        )}
        {!initialImage && !loading && (
          <div className='flex flex-col'>
            <label
              htmlFor='uploadFile'
              className={`text-center text-gray-800 border-2 border-palette-brown-500 bg-white px-3 py-2 rounded-md cursor-pointer shadow-lg hover:bg-palette-brown-200 hover:border-palette-brown-900 transition-colors font-semibold`}
            >
              Choose Image
            </label>
            <input
              id='uploadFile'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleFileChange}
            />
            <div className='flex p-3'>
              <Swoosh className='w-[60px] scale-x-[-1]' />
              <div className='mx-2 flex items-center'>Or</div>
              <Swoosh className='w-[60px]' />
            </div>
            <Button className='shadow-lg' onClick={handleClick}>
              Get Random
            </Button>
          </div>
        )}
        {(initialImage && !generatedImage && !loading && (
          <Image
            src={URL.createObjectURL(initialImage)}
            alt='Uploaded Image'
            fill={true}
            sizes='228px'
            style={{ objectFit: "contain" }}
            className='border-2 border-gray-200'
          />
        )) ||
          (generatedImage && !loading && (
            <Image
              src={base64ToDataUrl(generatedImage)}
              alt='Generated Image'
              fill={true}
              sizes='228px'
              style={{ objectFit: "contain" }}
              className='border-2 border-gray-200'
            />
          ))}
      </div>
    </div>
  );
};

export default Frame;
