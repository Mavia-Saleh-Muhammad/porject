import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Essentials = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <div className="mb-6">
        <h1 className={`${poppins.className} font-medium text-xl sm:text-2xl`}>
          The Essentials
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <Image
          src="/Essential/Frame (6).svg"
          alt="variety images"
          width={440}
          height={540}
          className="w-full lg:w-1/3"
        />
        <Image
          src="/Essential/Frame (7).svg"
          alt="variety images"
          width={440}
          height={540}
          className="w-full lg:w-1/3"
        />
        <Image
          src="/Essential/Frame (8).svg"
          alt="variety images"
          width={440}
          height={540}
          className="w-full lg:w-1/3"
        />
      </div>

      <div className="mt-12 flex flex-col  md:flex-row justify-center max-sm:justify-start max-sm:items-start  md:gap-4 lg:ml-6 ">
        <div className="flex-1">
          <h4 className={`${poppins.className} font-medium text-base`}>
            Icons
          </h4>
          <ul className="mt-4 text-sm text-gray-500">
            <li>Air Force</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className={`${poppins.className} font-medium text-base`}>
            Shoes
          </h4>
          <ul className="mt-4 text-sm text-gray-500">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className={`${poppins.className} font-medium text-base`}>
            Clothing
          </h4>
          <ul className="mt-4 text-sm text-gray-500">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className={`${poppins.className} font-medium text-base`}>
            Kids
          </h4>
          <ul className="mt-4 text-sm text-gray-500">
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Jordan Shoes</li>
            <li>Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
