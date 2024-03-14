"use client";

import { createContext, useState } from "react";
import type { ImageContextType } from "@/types";

export const ImageContext = createContext<ImageContextType | null>(null);

const Container = ({ children }) => {
  //TODO: rename this component to ImageProvider
  const [initialImage, setInitialImage] = useState<string | null>(null);
  const [uploadFilepath, setUploadFilepath] = useState<string | null>(null);
  const [uploadFilename, setUploadFilename] = useState<string | null>(null);
  const [generatedImagePath, setGeneratedImagePath] = useState<string | null>(
    null
  );

  return (
    <ImageContext.Provider
      value={{
        initialImage,
        setInitialImage,
        uploadFilepath,
        setUploadFilepath,
        generatedImagePath,
        setGeneratedImagePath,
        uploadFilename,
        setUploadFilename,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default Container;
