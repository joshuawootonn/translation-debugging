import type { AppProps } from "next/app";
import "../style/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
