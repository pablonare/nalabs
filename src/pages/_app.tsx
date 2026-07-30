import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import type { AppProps } from "next/app";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={spaceGrotesk.className}>
      <Component {...pageProps} />
    </div>
  );
}