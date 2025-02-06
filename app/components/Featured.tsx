import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Featured = () => {
  return (
    <div className={`${poppins.className} w-full px-4 sm:px-12 mt-24`}>
      <h2 className="text-[23px] font-medium">Featured</h2>

      <div className="mt-7">
        <Image
          src="/Featured/Image (4).svg"
          alt="Featured Image"
          width={1344}
          height={700}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center mt-11">
        <h1 className="text-center text-[28px] sm:text-[40px] lg:text-[54px] font-medium leading-tight">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-[15px] font-medium text-center mt-4 max-w-[530px]">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Link href="/Product"> <button className="mt-6 bg-black text-white text-[15px] font-medium px-6 py-2 rounded-full">
          Find Your Shoe
        </button> </Link>
      </div>
    </div>
  );
};

export default Featured;
