import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});


const Hero = () => {
  return (
    <div className={`${poppins.className} w-full overflow-x-hidden`}>
      <div className="w-full h-[58px] bg-[#F5F5F5] flex flex-col justify-center  items-center px-4 sm:px-12">
        <h2 className="text-[11px]">Hello Nike App</h2>
        <div className="w-auto">
          <p className="text-[11px] text-center text-[#111111] mt-2">
            Download the app to access everything Nike.{" "}
            <span className="underline">Get Your Great</span>
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-center ">
        <Image
          src="/Hero/Image.svg"
          alt="Hero Image"
          
          width={1144}
          height={700}
          className="object-cover"
        />
        <div className="w-full max-w-[1008px] text-center mt-6 px-4">
          <h3 className="text-[15px] font-medium text-black">First Look</h3>
          <h1 className="text-[36px] md:text-[56px] font-medium mt-2">
            Nike Air Max Pulse
          </h1>
          <p className="text-[15px] mt-4">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <button className="px-6 py-2 bg-black text-white rounded-full">
              Notify Me
            </button>
            <Link href="/Product"> <button className="px-6 py-2 bg-black text-white rounded-full">
              Shop Air Max
            </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
