import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CardProps = ({ image, title, endTime, currentBid, href }) => {
  return (
    <div>
      {/* content */}
      <Link href={href}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-[70px] sm:p-[100px]">
          <div
            style={{
              boxShadow: "0px 1px 10px #999",
            }}
            className="rounded-lg sm:w-[290px] sm:h-[450px]"
          >
            <div className="px-[15px] py-[10px]">
              <div className="w-full rounded-md">
                <Image
                  priority
                  src={image}
                  width={200}
                  height={150}
                  alt="card image"
                  className="rounded w-full h-[110px] object-cover"
                />
              </div>

              <div className=" bg-[#312925] border border-white">
                <div className="">
                  <h3 className="text-green-950 text-extrabold px-[30px] pt-6 sm:text-lg text-xl font-bold leading-loose">
                    {title}
                  </h3>

                  <div className="px-[30px] py-[60px] flex justify-between">
                    <div>
                      <p className="text-white text-xl font-bold">Ends in</p>
                      <p className="text-[#731e1b]">{endTime}</p>
                    </div>

                    <div>
                      <p className="text-white text-xl font-bold">Current Bid</p>
                      <p className="text-[#731e1b]">{currentBid}</p>
                    </div>
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
