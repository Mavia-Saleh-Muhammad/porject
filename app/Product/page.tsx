// Product Listing Page (page.tsx in product folder)
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Product = {
  _id: string;
  productName: string;
  price: number;
  category: string;
  inventory: number;
  colors: string[];
  status: string;
  description: string;
  imageUrl: string;
};

const getData = async (): Promise<Product[]> => {
  const fetchData = await client.fetch(`*[_type == "product"] {
    _id, productName, price, category, inventory, colors, status, description, 
    "imageUrl": image.asset->url
  }`);
  return fetchData;
};

const ProductPage = async () => {
  const SanityData: Product[] = await getData();

  return (
    <div className={`${poppins.className} bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16`}>
      <h1 className="mt-8 text-center text-4xl pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-700">
        Explore Our Products
      </h1>

      <div className="w-full h-auto mt-4 flex items-center justify-between px-4">
        <h5 className="text-2xl font-medium max-sm:text-base">
          New ({SanityData.length})
        </h5>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <h5 className="text-base font-normal max-sm:text-xs">
              Hide Filters
            </h5>
            <HiAdjustmentsHorizontal className="ml-2" />
          </div>
          <div className="flex items-center max-sm:text-xs">
            <h5 className="text-base font-normal">Sort By</h5>
            <SlArrowDown className="ml-2" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:mt-10">
        <div className="w-full md:w-[260px] h-auto px-4 md:ml-12 max-sm:mt-8">
          <ul className="hidden md:block space-y-6 text-[15px] font-medium">
            {["Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts", "Jackets", "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[calc(100%-260px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {SanityData.map((item) => (
              <Link key={item._id} href={`/product/${item._id}`}>
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
                  <div className="relative p-5">
                    <Image
                      src={item.imageUrl}
                      alt={item.productName}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 flex-grow">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 relative">
                      {item.productName}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Category:</strong> {item.category}
                    </p>
                    <p className="text-lg font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block mb-2">
                      ${item.price}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Inventory:</strong> {item.inventory} units
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Colors:</strong> {item.colors.join(", ")}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      <strong>Status:</strong> {item.status}
                    </p>
                  </div>
                  <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 mt-auto">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;