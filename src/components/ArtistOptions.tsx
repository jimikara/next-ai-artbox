"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ImageContext } from "@/components/ImageProvider";
import { generateImage } from "@/app/actions";
import { artistDetails } from "@/constants/artistDetails";
import type { ImageContextType, TextPrompt } from "@/types";
import classNames from "classnames";
import { getErrorMessage } from "@/utils/error";

interface IArtistOptionsProps {
  className?: string;
  closeModal?: () => void;
}

const ArtistOptions = ({ className, closeModal }: IArtistOptionsProps) => {
  const {
    initialImage,
    setGeneratedImage,
    loading,
    setLoading,
    error,
    setError,
  } = useContext<ImageContextType>(ImageContext);

  const containerClasses = classNames(
    className,
    "grid",
    "gap-12",
    "grid-cols-2",
    "grid-rows-3",
    "items-center",
    "justify-items-center",
    "lg:grid-flow-col",
    "lg:gap-4",
    "lg:grid-cols-none",
    "lg:grid-rows-1"
  );
  const optionClasses = classNames(
    "bg-palette-yellow-500 p-2 rounded-lg text-center transition-colors duration-200 shadow-lg w-[100px] flex flex-col justify-center items-center justify-self-end"
  );

  let image = null;

  const handleClick = async (prompts: TextPrompt[]) => {
    if (!initialImage) return;

    setLoading(true);

    if (closeModal) {
      closeModal();
    }

    const formData: FormData = new FormData();
    formData.append("init_image", initialImage);

    try {
      image = await generateImage(prompts, formData);
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError(message);
      setLoading(false);
      return;
    }

    setGeneratedImage(image);
    setLoading(false);
  };

  return (
    <div className={containerClasses}>
      {artistDetails.map((option, index) => {
        return (
          <div
            key={index}
            className={`${optionClasses} ${
              index % 2 === 0 ? "justify-self-end" : "justify-self-start"
            }`}
            role='button'
            onClick={() => handleClick(option.prompts)}
          >
            <Image
              src={option.imageURL}
              width='90'
              height='90'
              alt={option.altText}
              priority
            ></Image>
            <div className='font-semibold mt-1'>{option.artistName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistOptions;
