"use client";

import Toast from "@/components/Toast";
import { useContext } from "react";
import { ImageContext } from "@/components/ImageProvider";
import { createPortal } from "react-dom";

const Wrapper = () => {
  const { error } = useContext(ImageContext);

  if (error) {
    return createPortal(<Toast />, document.body);
  }
};

export default Wrapper;
