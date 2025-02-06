import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Gear from "./components/Gear";
import Miss from "./components/Miss";
import Essentials from "./components/Essentials";

const page = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Featured />
      <Gear />
      <Miss />
      <Essentials />
    </div>
  );
};

export default page;
