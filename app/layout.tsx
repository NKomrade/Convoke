'use client'
import { ReactNode, useState } from "react";
import VideoCurtain from "@/app/components/ui/VideoCurtain";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Convoke</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {!videoEnded && <VideoCurtain onEnd={() => setVideoEnded(true)} />}
        {videoEnded && <main>{children}</main>}
      </body>
    </html>
  );
}
