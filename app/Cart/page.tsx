"use client"
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Side = () => {
  const [cart, setCart] = useState<
    {
      id: number;
      name: string;
      description: string;
      color: string;
      size: string;
      quantity: number;
      price: number;
      image: string;
    }[]
  >([
    {
      id: 1,
      name: "Nike Dri FIT ADV TechKnit Ultra",
      description: "Mens Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 3895,
      image: "/Featured/Image (5).svg",
    },
    {
      id: 2,
      name: "Nike Air Max 97 SE",
      description: "Mens Shoes",
      color: "Flat Pewter/Light Bone/Black/White",
      size: "8",
      quantity: 1,
      price: 16995,
      image: "/Featured/Image (7).svg",
    },
  ]);

  const [favorites, setFavorites] = useState<number[]>([]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`${poppins.className} px-4 md:px-8 lg:px-16`}>
      <div className="max-w-[1100px] mx-auto mt-[40px] flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="w-full bg-[#F7F7F7] p-4 gap-2">
              <h5 className="font-medium text-[13px]">Free Delivery</h5>
              <p className="text-[11px] font-normal text-[#111111]">
                Applies to orders of ₹ 14 000.00 or more. 
                <span className="font-medium text-[11px] underline ml-3">
                  View details
                </span>
              </p>
            </div>
            <h1 className="text-[22px] font-medium mt-4">Bag</h1>
            <div className="w-full mt-4 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start gap-6">
                  <Image src={item.image} alt={item.name} width={150} height={150} className="flex-shrink-0" />
                  <div className="flex-1 border-b border-[#E5E5E5] pb-5">
                    <h5 className="font-medium text-[15px] text-[#111111]">{item.name}</h5>
                    <p className="text-[15px] font-normal text-[#757575]">{item.description}</p>
                    <p className="text-[15px] font-normal text-[#757575]">{item.color}</p>
                    <p className="text-[15px] font-normal text-[#757575]">
                      Size {item.size} 
                      <span className="ml-10 text-[15px] font-normal text-[#757575]">
                        Quantity: 
                        <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2">-</button>
                        {item.quantity}
                        <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2">+</button>
                      </span>
                    </p>
                    <div className="flex gap-3 mt-6">
                      <CiHeart className={`w-6 h-6 cursor-pointer ${favorites.includes(item.id) ? "text-red-500" : ""}`} onClick={() => toggleFavorite(item.id)} />
                      <RiDeleteBin6Line className="w-6 h-6 cursor-pointer" onClick={() => handleDelete(item.id)} />
                    </div>
                  </div>
                  <p className="font-normal text-[15px]">MRP: ₹ {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-lg">
              <h1 className="text-[21px] font-medium">Summary</h1>
              <div className="flex justify-between mt-4">
                <p className="text-[15px] font-normal">Subtotal</p>
                <p className="text-[15px] font-normal">₹ {calculateSubtotal()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px] font-normal">Estimated Delivery & Handling</p>
                <p className="text-[15px] font-normal">Free</p>
              </div>
              <div className="flex justify-between border-y border-[#E5E5E5] py-4">
                <p className="text-[15px] font-normal">Total</p>
                <p className="text-[15px] font-normal">₹ {calculateSubtotal()}</p>
              </div>
              <button className="w-full h-[60px] rounded-[30px] bg-black text-white text-[15px] font-medium mt-4">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Side;