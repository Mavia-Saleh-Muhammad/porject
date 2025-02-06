import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Page = () => {
  return (
    <div>
      <section className={`${poppins.className}`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image
            src="/Images/NavbarImg/logo.svg"
            alt="nike"
            width={78.47}
            height={78.47}
          />
          <h1 className="w-[180px] text-[18px] font-bold text-center">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>
          <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500  text-xs">
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium  hover:underline text-gray-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="max-sm:w-full h-[59px] md:ml-4 md:w-[324px]">
                  <p className="text-xs font-normal text-center flex justify-center">
                    By logging in you agree to Nike s Privacy Policy and Terms
                    of Use.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-black focus:ring-4  font-medium  text-sm px-5 py-2.5 text-center ">
                  SIGN IN
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
                  Not a Member?
                  <Link
                    href="/signup"
                    className="font-medium text-black hover:underline "
                  >
                    Join Us.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
