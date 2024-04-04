"use client";

import React, { createContext, useState } from "react";
import type { ImageContextType } from "@/types";

export const ImageContext = createContext<ImageContextType>({
  initialImage: null,
  setInitialImage: () => {},
  generatedImage: null,
  setGeneratedImage: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

interface IImageProviderProps {
  children: React.ReactNode;
}

const ImageProvider = ({ children }: IImageProviderProps) => {
  const [initialImage, setInitialImage] = useState<Blob | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <ImageContext.Provider
      value={{
        generatedImage,
        setGeneratedImage,
        initialImage,
        setInitialImage,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
