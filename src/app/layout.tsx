import type { Metadata } from "next";
import className from "classnames";
import { Finger_Paint } from "next/font/google";
import "./globals.css";

const fingerPaint = Finger_Paint({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-finger-paint",
});

export const metadata: Metadata = {
  title: "AI Artbox",
  description: "Send an image and get an AI-generated art piece",
};

const bodyClassNames = className("w-screen", "h-screen", fingerPaint.className);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bodyClassNames}>{children}</body>
    </html>
  );
}
