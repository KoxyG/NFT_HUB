import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import HomeComponet from "@/components/Home";
import Explore from "@/pages/Explore";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={inter} className="">

        <Navbar />

        < HomeComponet />
        
        <Explore />
        <AboutUs />
   
      <Footer />
    </main>
  );
}
