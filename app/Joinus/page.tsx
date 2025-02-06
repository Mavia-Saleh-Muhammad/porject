import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const JoinUs = () => {
  return (
    <div
      className={`${poppins.className} flex justify-center items-center min-h-screen `}
    >
      <div className="w-96 bg-white p-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/Images/NavbarImg/logo.svg"
            alt="nike"
            width={78.47}
            height={78.47}
          />
        </div>
        <h1 className="text-[18px] font-bold text-center mb-8">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-gray-600 text-center my-4 font-normal text-sm">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300"
              placeholder=" Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300"
              placeholder=" Password"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 "
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="location"
              className="w-full px-3 py-2 border border-gray-300 "
              placeholder="Pakistan"
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male" className="text-sm text-gray-700">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              <label htmlFor="female" className="text-sm text-gray-700">
                Female
              </label>
            </div>
          </div>
          <div>
            <textarea
              id="bio"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us a little about yourself..."
            ></textarea>
          </div>
          <div className="text-[#8D8D8D] font-normal text-xs text-center">
            <p>
              By creating an account you agree to Nikes{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Use.</span>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2  font-medium"
          >
            Join Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
