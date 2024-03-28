"use client";

import { useContext } from "react";
import { ImageContext } from "@/components/ImageProvider";
import CloseButton from "@/components/CloseButton";
import classNames from "classnames";
import { createPortal } from "react-dom";

const Toast = ({ message, closeToast }) => {
  const containerClasses = classNames(
    "fixed",
    "bottom-5",
    "left-0",
    "right-0",
    "mb-4",
    "flex",
    "justify-center",
    "z-50"
  );
  const messageClasses = classNames(
    "bg-palette-error-200",
    "border-2",
    "border-palette-error-600",
    "py-4",
    "rounded-md",
    "shadow-lg",
    "p-10",
    "min-w-[320px]",
    "animate-slideUpFadeIn"
  );

  const { error, setError } = useContext(ImageContext);

  return createPortal(
    <>
      {error && (
        <div className={containerClasses}>
          <div className={messageClasses}>
            {error}
            <span className='absolute top-2 right-2'>
              <CloseButton
                size={24}
                fillColor='[&_path]:fill-palette-error-800'
                strokeColor='[&_circle]:fill-palette-error-100'
                hoverFillColor='[&_path]:hover:fill-palette-error-100'
                hoverStrokeColor='[&_circle]:hover:fill-palette-error-700'
                onClick={() => setError(null)}
              />
            </span>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Toast;
