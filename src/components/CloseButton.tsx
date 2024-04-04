"use client";

import { useState } from "react";
import classnames from "classnames";

interface ICloseButtonProps {
  fillColor?: string;
  strokeColor?: string;
  hoverFillColor?: string;
  hoverStrokeColor?: string;
  onClick: () => void;
  size?: number;
  className?: string;
}

const CloseButton = ({
  fillColor = "[&_path]:fill-slate-600",
  strokeColor = "[&_circle]:fill-white",
  hoverFillColor = "[&_path]:hover:fill-white",
  hoverStrokeColor = "[&_circle]:hover:fill-slate-600",
  onClick,
  size,
  className,
}: ICloseButtonProps) => {
  const svgClasses = classnames(
    "cursor-pointer",
    fillColor,
    strokeColor,
    hoverFillColor,
    hoverStrokeColor,
    className
  );

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || 40}
      height={size || 40}
      fill='none'
      viewBox='0 0 60 60'
      className={svgClasses}
      onClick={onClick}
    >
      <circle
        cx={28.25}
        cy={28.25}
        r={28.25}
        className='transition-all duration-200 ease-in-out'
      />
      <path
        fillRule='evenodd'
        d='m38.651 19.506-19.589 19.59-2.101-2.102 19.59-19.59 2.1 2.102Z'
        clipRule='evenodd'
        className={`transition-all duration-200 ease-in-out`}
      />
      <path
        fillRule='evenodd'
        d='m37.438 39.095-19.59-19.589 2.102-2.101 19.59 19.589-2.102 2.101Z'
        clipRule='evenodd'
        className='transition-all duration-200 ease-in-out'
      />
    </svg>
  );
};

export default CloseButton;
