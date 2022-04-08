import "../styles/globals.css";
import type { AppProps } from "next/app";
import ConfigHead from "../src/Infra/ConfigHead";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigHead />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
