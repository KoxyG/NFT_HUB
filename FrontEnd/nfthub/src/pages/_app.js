import "@/styles/globals.css";
import { NftProvider } from "@/Context";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NftProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NftProvider>
    </div>
  );
}
