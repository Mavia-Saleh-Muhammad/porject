// Product Detail Page (page.tsx in [id] folder)
import { client } from "@/sanity/lib/client";
import Image from "next/image";

type ProductDetails = {
  productName: string;
  imageUrl: string;
  price: number;
  description: string;
};

const getProductData = async (id: string): Promise<ProductDetails | null> => {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      productName, price, description,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return product;
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const productData: ProductDetails | null = await getProductData(params.id);

  if (!productData) {
    return (
      <div className="max-w-screen-lg mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold mb-6 text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-600">
          Sorry, the product you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto mt-12 p-10 bg-white rounded-lg shadow-lg border border-gray-300">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">{productData.productName}</h1>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <Image
          src={productData.imageUrl}
          alt={productData.productName}
          width={700}
          height={700}
          className="rounded-lg w-full lg:w-1/2 object-cover"
        />

        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-lg font-medium mb-4 text-gray-800">{productData.description}</p>
          <p className="text-3xl font-bold mb-8 text-green-700">${productData.price}</p>
          <button className="w-full h-[60px] bg-[#029FAE] text-white rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
