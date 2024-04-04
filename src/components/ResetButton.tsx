"use client";

import { useContext } from "react";
import { ImageContext } from "@/components/ImageProvider";
import Button from "@/components/Button";

interface IResetButtonProps {
  className?: string;
  isDisabled?: boolean;
}

const ResetButton = ({ className, isDisabled }: IResetButtonProps) => {
  const { setGeneratedImage, setInitialImage } = useContext(ImageContext);

  const reset = () => {
    setGeneratedImage(null);
    setInitialImage(null);
  };

  return (
    <Button className={className} isDisabled={isDisabled} onClick={reset}>
      Reset
    </Button>
  );
};

export default ResetButton;
