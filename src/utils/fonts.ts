import { Inter, Finger_Paint, Roboto_Mono } from "next/font/google";

export const fingerPaint = Finger_Paint({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-finger-paint",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});