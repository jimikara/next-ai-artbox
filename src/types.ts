export type ImageContextType = {
  initialImage: File | null;
  // initialImage: string | null;
  setInitialImage: (image: string) => void;
};

export type ApiResponse = {
  [key: string]: string;
}

export type TextPrompt = {
  text: string;
  weight: number;
}

interface GenerationResponse {
  artifacts: Array<{
    base64: string
    seed: number
    finishReason: string
  }>
}