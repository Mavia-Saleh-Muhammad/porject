import React from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEditLocation, MdForwardToInbox } from "react-icons/md";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div className={`${poppins.className}`}>
      {/* Header Section */}
      <div className="h-auto w-full px-4 flex flex-col justify-center items-center py-8">
        <h1 className="text-[24px] lg:text-[32px] font-medium">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="border border-gray-400 text-gray-600 w-full max-w-[350px] h-[56px] mt-6 rounded px-4"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-20 mt-10">
        {/* Payment Options Section */}
        <div className="w-full">
          <h4 className="font-medium text-[20px] lg:text-[28px]">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h4>
          <p className="font-normal text-sm lg:text-base text-gray-900 mt-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc ml-5 mt-4 text-sm lg:text-base">
            <li>Visa Mastercard Diners Club Discover</li>
            <li>American Express Visa Electron Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="font-normal text-sm lg:text-base mt-4 text-gray-900">
            If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <div className="mt-7">
            <p className="font-normal text-sm lg:text-base text-gray-900">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, join us today.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="text-white bg-black py-2 px-6 rounded-full">JOIN US</button>
              <button className="text-white bg-black py-2 px-6 rounded-full">SHOP NIKE</button>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-10">
          <h5 className="text-lg lg:text-[20px] font-medium text-gray-900">FAQs</h5>
          <div className="mt-4 space-y-6">
            <div>
              <p className="font-bold text-sm lg:text-base text-gray-900">
                Does my card need international purchases enabled?
              </p>
              <p className="text-sm lg:text-base font-normal text-gray-900 mt-2">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="text-sm lg:text-base font-normal text-gray-900 mt-4">
                Please note some banks may charge
                <span className="font-medium underline"> a small transaction fee</span> for international orders.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm lg:text-base text-gray-900">
                Can I pay for my order with multiple methods?
              </p>
              <p className="font-normal text-sm lg:text-base text-gray-900 mt-2">
                No, payment for Nike orders can’t be split between multiple payment methods.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm lg:text-base text-gray-900">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="font-normal text-sm lg:text-base text-gray-900 mt-2">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm lg:text-base text-gray-900">
                Why don’t I see Apple Pay as an option?
              </p>
              <p className="text-sm lg:text-base font-normal text-gray-900 mt-2">
                To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-10">
          <p className="text-sm lg:text-base font-normal text-gray-900">Was this answer helpful?</p>
          <div className="flex gap-4 mt-2">
            <BiSolidLike className="w-8 h-8 text-gray-700" />
            <BiSolidDislike className="w-8 h-8 text-gray-700" />
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-10">
          <p className="text-sm lg:text-base font-medium text-gray-700">RELATED</p>
          <ul className="mt-3 space-y-2">
            <li className="text-sm lg:text-base font-medium text-gray-900 underline">WHAT ARE NIKE’S DELIVERY OPTIONS?</li>
            <li className="text-sm lg:text-base font-medium text-gray-900 underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
          </ul>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="w-full text-center mt-20">
        <h1 className="text-[24px] lg:text-[28px] font-medium">CONTACT US</h1>
      </div>
      <div className="flex flex-wrap justify-around items-start gap-10 mt-10 px-4 lg:px-20">
        <div className="text-center">
          <FaMobileAlt className="w-16 h-16 mx-auto text-gray-700" />
          <p className="font-medium text-sm lg:text-base mt-4">000 800 919 0566</p>
          <p className="font-normal text-sm lg:text-base">Products & Orders: 24 hours a day, 7 days a week</p>
          <p className="font-normal text-sm lg:text-base">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
        </div>
        <div className="text-center">
          <RiMessage2Fill className="w-16 h-16 mx-auto text-gray-700" />
          <p className="font-medium text-sm lg:text-base mt-4">24 hours a day</p>
          <p className="font-normal text-sm lg:text-base">7 days a week</p>
        </div>
        <div className="text-center">
          <MdForwardToInbox className="w-16 h-16 mx-auto text-gray-700" />
          <p className="font-medium text-sm lg:text-base mt-4">We’ll reply within</p>
          <p className="font-normal text-sm lg:text-base">five business days</p>
        </div>
        <div className="text-center">
          <MdEditLocation className="w-16 h-16 mx-auto text-gray-700" />
          <p className="font-medium text-sm lg:text-base mt-4">STORE LOCATOR</p>
          <p className="font-normal text-sm lg:text-base">Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
