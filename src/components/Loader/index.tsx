"use client";

import { useState, useEffect, useRef, ReactElement } from "react";
import "./styles.css";

const generateSquares = (width: number): ReactElement[] => {
  return Array.from({ length: 80 }).map((_, index) => {
    const size = Math.floor(Math.random() * 5) + 4;
    const top = Math.floor(Math.random() * width);
    const left = Math.floor(Math.random() * width);
    const colors = ["#E78BB2", "#8D8BE7", "#EACA58", "#40C35D"];

    return (
      <div
        key={index}
        className='absolute'
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}px`,
          left: `${left}px`,
          backgroundColor: colors[index % 4],
          borderRadius: "2px",
          margin: "2px",
          transform: "scale(0)",
          animation: "sparkle .75s infinite",
          animationDelay: `${index * 0.15}s`,
        }}
      ></div>
    );
  });
};

const generateDots = (width: number): ReactElement[] => {
  return Array.from({ length: 3 }).map((_, index) => {
    return (
      <span
        key={index}
        className='inline-block'
        style={{
          animation: "blink 1s infinite",
          animationDelay: `${index * 0.15}s`,
        }}
      >
        .
      </span>
    );
  });
};

const Loader = ({ text = "Loading" }) => {
  const [squares, setSquares] = useState<ReactElement[] | []>([]);
  const [dots, setDots] = useState<ReactElement[] | []>([]);
  const containerRef = useRef(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const { offsetWidth } = containerRef.current;
    setWidth(offsetWidth);
  }, []);

  useEffect(() => {
    const squares = generateSquares(width);
    setSquares(squares);
    setDots(generateDots(width));
  }, [width]);

  return (
    <div
      ref={containerRef}
      className='loader-is-this w-full h-full bg-white grid place-content-center bg-white-600 absolute z-30'
    >
      <p className='bg-white/70 p-3 z-10 text-gray-800'>
        {text}
        {dots}
      </p>
      {squares}
    </div>
  );
};

export default Loader;
