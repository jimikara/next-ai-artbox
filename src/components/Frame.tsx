"use client";

import { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { ImageContext } from "@/components/Container";
import type { ImageContextType } from "@/types";
import { uploadImage } from "@/app/actions";

const Frame = () => {
  const [displayImage, setDisplayImage] = useState(null);
  const context = useContext(ImageContext) as ImageContextType;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("imageFile", file);

    const data = await uploadImage(formData);

    console.log("Data", data);

    if (data.filename) {
      context.setUploadFilename(data.filename);
    }

    if (file) {
      context.setInitialImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setDisplayImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-[360px] h-[360px] border-4 border-emerald-200 relative'>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {(displayImage && !context.generatedImagePath && (
        <Image
          src={displayImage}
          alt='Uploaded Image'
          fill={true}
          style={{ objectFit: "contain" }}
        />
      )) ||
        (context.generatedImagePath && (
          <Image
            src={context.generatedImagePath}
            alt='Generated Image'
            fill={true}
            style={{ objectFit: "contain" }}
          />
        ))}
    </div>
  );
};

export default Frame;
