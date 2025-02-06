import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Miss = () => {
  return (
    <div className={`${poppins.className} w-full px-4 sm:px-12 mt-14`}>
      <div className="w-full h-auto">
        <div>
          <h1 className="text-[22px] font-medium">Dont Miss</h1>
        </div>

        <div className="mt-5">
          <Image
            src="/Miss/Image (9).svg"
            alt="Men and Shoe"
            width={1344}
            height={700}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full text-center mt-10">
          <h1 className="text-[40px] sm:text-[52px] font-medium">
            FLIGHT ESSENTIALS
          </h1>
          <p className="mt-4 text-[15px] text-[#757575] max-w-2xl mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <Link href="/Cart"> <button className="mt-6 rounded-full bg-black text-white text-[15px] py-2 px-6 font-medium">
            Shop
          </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Miss;
