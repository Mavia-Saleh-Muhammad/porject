import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Gear = () => {
  return (
    <div className={`${poppins.className} w-full px-4 sm:px-12 mt-24`}>
      <div className="w-full h-auto flex flex-col gap-8">
        <h2 className="text-[23px] font-medium text-center sm:text-left">
          Gear Up
        </h2>

        <div className="flex flex-wrap gap-12 justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col items-center">
              <Image
                src="/Featured/Image (5).svg"
                alt="Men's Running Top"
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[12px] font-medium">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-[15px] font-medium">₹ 3,895</p>
                <p className="text-[14px] text-[#757575]">
                  Mens Short-Sleeve Running Top
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/Featured/Image (6).svg"
                alt="Men's Shorts"
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[12px] font-medium">
                  Nike Dri-FIT Challenger
                </h3>
                <p className="text-[15px] font-medium">₹ 3,895</p>
                <p className="text-[14px] text-[#757575]">
                  Mens 18cm (approx.) 2-in-1 Versatile Shorts
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/Featured/Image (7).svg"
                alt="Women's Running Top"
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[12px] font-medium">
                  Nike Dri-FIT ADV Run Division
                </h3>
                <p className="text-[15px] font-medium">₹ 5,295</p>
                <p className="text-[14px] text-[#757575]">
                  Womens Long-Sleeve Running Top
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/Featured/Image (8).svg"
                alt="Women's Leggings"
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[12px] font-medium">Nike Fast</h3>
                <p className="text-[15px] font-medium">₹ 3,795</p>
                <p className="text-[14px] text-[#757575]">
                  Womens Mid-Rise 7/8 Running Leggings with Pockets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
