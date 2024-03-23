import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CardProps = ({ image, title, endTime, currentBid}) => {
  return (
    <div>
      {/* content */}
      <Link href={"/nftDetails"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-[70px] sm:p-[100px]">
        <div
          style={{
            boxShadow: "0px 1px 10px #999",
          }}
          className="rounded-lg sm:w-[290px] sm:h-[450px]"
        >
          <div className="px-[15px] py-[10px]">
            <div className="rounded-md w-full">
              <Image
                priority
                src={image}
                width={200}
                height={40}
                alt="card image"
                className="rounded w-full h-[210px] object-cover"
              />
            </div>

            <div className="py-[50px] px-[20px] bg-[#46332b] border border-white">
              <h3 className="text-green-950 py-[10px] sm:text-lg font-bold leading-loose">
                {title}
              </h3>

             <div className="flex justify-between">
               <div>
                    <p>Ends in</p>
                    <p className="text-[#731e1b]">{endTime}</p>
               </div>

               <div>
                    <p>Current Bid</p>
                    <p className="text-[#731e1b]">{currentBid}</p>
               </div>
             </div>

            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardProps;
