import React from "react";  

export type ImageContextType = {
  initialImage: Blob | null;
  setInitialImage: React.Dispatch<React.SetStateAction<Blob | null>>;
  generatedImage: string | null;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export type ApiResponse = {
  [key: string]: string;
}

export type TextPrompt = {
  text: string;
  weight: string;
}

export interface GenerationResponse {
  artifacts: Array<{
    base64: string
    seed: number
    finishReason: string
  }>
}
export interface ErrorResponse {
  message: string;
  status: number;
}