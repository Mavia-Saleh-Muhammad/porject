import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ProductDetail = () => {
  return (
    <div>
      <div className="w-full mt-24   px-4 max-sm:px-6 md:mb-48 ">
        <div className="flex flex-col  mt-24 md:justify-center md:flex-row items-center md:items-start gap-20">
          <div className="w-full md:ml-[124px] flex justify-center">
            <Image
              src="/ProductDetail/Rectangle.svg"
              alt="product detail"
              width={653}
              height={653}
              className="object-contain"
            />
          </div>

          <div className="w-full  ">
            <h1
              className={`${poppins.className} font-medium text-center md:text-left max-sm:text-2xl md:text-4xl md:w-[367px]`}
            >
              Nike Air Force 1 PLT.AF.ORM
            </h1>
            <p
              className={`${poppins.className} mt-5 text-center md:text-left text-sm md:text-base font-normal leading-relaxed md:w-[374.92px]`}
            >
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its inside outinspired construction including unique layering
              and exposed foam accents, ups the ante on this timeless Jordan
              Brand silhouette. Details like the deco stitching on the Swoosh
              add coveted appeal while the unexpected shading rich mixture of
              materials and aged midsole aesthetic give this release an artisan
              finish.
            </p>
            <h2
              className={`${poppins.className} mt-5 font-medium text-center md:text-left text-2xl md:text-3xl`}
            >
              ₹ 8,695.00
            </h2>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center mt-6">
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
