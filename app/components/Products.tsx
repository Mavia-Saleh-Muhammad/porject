import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Products = () => {
  return (
    <div className={`${poppins.className} w-full px-4 sm:px-12`}>
      <div className="w-full h-auto mt-20">
        
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-[22px] font-medium flex-shrink-0">
            Best of Air Max
          </h1>
          <div className="flex items-center gap-4">
            <h4 className="text-[15px] font-medium">Shop</h4>
            <div className="flex items-center gap-3">
              <Image
                src="/Products/arrowleft.svg"
                alt="arrow left"
                height={40}
                width={40}
                className="cursor-pointer"
              />
              <Image
                src="/Products/arrowright.svg"
                alt="arrow right"
                height={40}
                width={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
        
          <div className="flex flex-col items-center">
            <Image
              src="/Products/Image (1).svg"
              alt="shoesImage"
              width={441.36}
              height={441.36}
              className="w-full h-auto"
            />
            <div className="w-full mt-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-[15px]">Nike Air Max Pulse</h2>
                <h2 className="font-medium text-[15px]">₹ 13,995</h2>
              </div>
              <h3 className="font-normal text-[15px] text-[#757575] mt-1">
                Womens Shoes
              </h3>
            </div>
          </div>

          
          <div className="flex flex-col items-center">
            <Image
              src="/Products/Image (2).svg"
              alt="shoesImage"
              width={441.36}
              height={441.36}
              className="w-full h-auto"
            />
            <div className="w-full mt-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-[15px]">Nike Air Max Pulse</h2>
                <h2 className="font-medium text-[15px]">₹ 13,995</h2>
              </div>
              <h3 className="font-normal text-[15px] text-[#757575] mt-1">
                Mens Shoes
              </h3>
            </div>
          </div>

          
          <div className="flex flex-col items-center">
            <Image
              src="/Products/Image (3).svg"
              alt="shoesImage"
              width={441.36}
              height={441.36}
              className="w-full h-auto"
            />
            <div className="w-full mt-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-[15px]">Nike Air Max 97 SE</h2>
                <h2 className="font-medium text-[15px]">₹ 16,995</h2>
              </div>
              <h3 className="font-normal text-[15px] text-[#757575] mt-1">
                Mens Shoes
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
