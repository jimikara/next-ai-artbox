"use client";

import { useContext, useState } from "react";
import { ImageContext } from "@/components/ImageProvider";
import { createPortal } from "react-dom";
import ResetButton from "@/components/ResetButton";
import DownloadButton from "@/components/DownloadButton";
import ArtistOptionsModal from "@/components/ArtistOptionsModal";
import Button from "@/components/Button";
import resolveConfig from "tailwindcss/resolveConfig";
import type { Config } from "tailwindcss";
import config from "tailwind.config.ts";
import classNames from "classnames";

const fullConfig = resolveConfig(config as Config);

const Controls = () => {
  const { generatedImage, initialImage } = useContext(ImageContext);
  const [showModal, setShowModal] = useState(false);

  const containerClasses = classNames(
    "block",
    "w-[340px]",
    "md:w-[400px]",
    "2xl:w-[480px]",
    "mt-5",
    "pb-[100px]",
    "md:mt-8",
    "flex",
    "flex-col",
    "lg:flex-row",
    "relative",
    "whitespace-nowrap"
  );

  const buttonClasses = classNames(
    "mt-4",
    "shadow-xl",
    "w-full",
    "lg:last-of-type:ml-2",
    "lg:first-of-type:mr-2"
  );

  return (
    <div className={containerClasses}>
      <>
        <Button
          className={buttonClasses}
          isDisabled={!Boolean(initialImage)}
          onClick={() => setShowModal(true)}
        >
          Select Artist
          <span className={!Boolean(initialImage) ? "opacity-50" : ""}>
            &nbsp;&#127912;
          </span>
        </Button>
        <ResetButton
          className={buttonClasses}
          isDisabled={!Boolean(initialImage) && !Boolean(generatedImage)}
        />
      </>
      <DownloadButton
        className={buttonClasses}
        isDisabled={!Boolean(generatedImage)}
      />

      {showModal &&
        (window.innerWidth <
        parseInt(fullConfig.theme.screens.lg.split("px")[0]) ? (
          createPortal(
            <ArtistOptionsModal onClose={() => setShowModal(false)} />,
            document.body
          )
        ) : (
          <ArtistOptionsModal onClose={() => setShowModal(false)} />
        ))}
    </div>
  );
};

export default Controls;
