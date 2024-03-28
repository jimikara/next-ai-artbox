"use client";

import { createContext, useState } from "react";
import type { ImageContextType } from "@/types";

export const ImageContext = createContext<ImageContextType | null>(null);

const ImageProvider = ({ children }) => {
  const [initialImage, setInitialImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

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
