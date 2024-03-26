import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

function Footer() {
  return (
    <div className=" px-[50px] md:px-[50px] py-[60px] bg-[#312925] grid grid-cols-1 md:flex md:flex-row gap-4">
      <div className="container mx-auto md:flex flex-wrap md:flex-row justify-between w-full">
        
        <div className="md:flex justify-center items-start md:gap-[100px]">
          <div className="flex flex-row gap-[100px]">
            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-gray-50 text-[15px] md:text-[30px] font-semibold">Product</p>
              <p className="text-gray-50 text-[8px] md:text-[18px] font-normal">Features</p>
              <p className="text-gray-50 text-[8px] md:text-[18px] font-normal">Workload</p>
              <p className="text-gray-50 text-[10px] md:text-[18px] font-normal">Time</p>
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-gray-50 text-[25px] md:text-[30px] font-semibold">Company</p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">Real Work</p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">About & Contact</p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">Careers</p>
            </div>
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
            <p className="text-gray-50 text-[25px] md:text-[30px] font-semibold">Resources</p>
            <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">Blog</p>
            <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">Help & About</p>
            <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">Customer</p>
          </div>

          <div className="md:w-[519px] md:h-[88px]    mt-[60px] md:mt-[20px]">
          <div className="flex flex-row items-center gap-4">
            <Image src="/Images/logo.png" width={100} height={100} alt="logo" />
           
          </div>
          <p className="text-opacity-90 py-[15px] text-white text-[10px] md:text-[18px]/[26px] font-normal">
            Sculpting the Future of Digital Art
          </p>
          <div className="flex flex-row cursor-pointer space-x-5 text-white">
            <FaTwitter />
            <SiDiscord />
            <HiOutlineMail />
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
}
export default Footer;