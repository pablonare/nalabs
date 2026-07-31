import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="UTC"
    >
      <div className={spaceGrotesk.className}>
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
  );
}