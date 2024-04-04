"use client";

import { useContext } from "react";
import { ImageContext } from "@/components/ImageProvider";
import Button from "@/components/Button";

interface IDownloadButtonProps {
  className?: string;
  isDisabled?: boolean;
}

const DownloadButton = ({ className, isDisabled }: IDownloadButtonProps) => {
  const { generatedImage } = useContext(ImageContext);

  // const combineImages = (bitmapImage, svgImage) => {
  //   const canvas = document.createElement("canvas");
  //   canvas.width = 400; // Set canvas width
  //   canvas.height = 300; // Set canvas height
  //   const ctx = canvas.getContext("2d");

  //   // Load the bitmap image
  //   const bitmapImage = new Image();
  //   bitmapImage.src = bitmapImage;

  //   // Load the SVG frame
  //   const svgFrame = new Image();
  //   svgFrame.src = svgImage;

  //   // When both images are loaded, draw them onto the canvas
  //   bitmapImage.onload = () => {
  //     svgFrame.onload = () => {
  //       // Draw the bitmap image
  //       ctx.drawImage(bitmapImage, 0, 0, canvas.width, canvas.height);

  //       // Draw the SVG frame
  //       ctx.drawImage(svgFrame, 0, 0, canvas.width, canvas.height);

  //       // Convert canvas to JPEG image
  //       const dataURL = canvas.toDataURL("image/jpeg");

  //       // Create a link to download the JPEG image
  //       const downloadLink = document.createElement("a");
  //       downloadLink.href = dataURL;
  //       downloadLink.download = "output.jpg";
  //       document.body.appendChild(downloadLink);
  //       downloadLink.click();
  //       document.body.removeChild(downloadLink);
  //     };
  //   };
  // };

  const handleDownload = () => {
    if (!generatedImage) {
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = `data:image/jpeg;base64,${generatedImage}`;
    downloadLink.download = "image.jpg";
    downloadLink.click();
  };

  return (
    <>
      <Button
        isDisabled={isDisabled}
        className={className}
        onClick={handleDownload}
      >
        Download
      </Button>
    </>
  );
};

export default DownloadButton;
