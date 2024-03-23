import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import HomeComponet from "@/components/Home";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={inter} className="">
      <div className="mx-[30px]">
        <Navbar />

        < HomeComponet />
      </div>
    </main>
  );
}
