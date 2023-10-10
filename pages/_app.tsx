import type { AppProps } from "next/app";
import "../style/global.css";

import localFont from "next/font/local";

const myFont = localFont({
  src: "./Aloevera.ttf",
  variable: "--font-aloevera",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
