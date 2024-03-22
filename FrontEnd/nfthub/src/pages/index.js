import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=""
    >
      <div className="mx-[30px]">
      <Navbar />
     
      <h1>Hiii</h1>
      </div>
    </main>
  );
}
