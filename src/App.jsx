import React from "react";
import { Navbar } from "./components/navbar";
import SimpleSlider from "./components/banner";
import Product from "./ProductsData/product";
import Topsale from "./components/topsale";
import BottomSlider from "./components/bannerbottom";
const App = () => {
  return (
    <div className="bg-bodycolor">
      <Navbar />
      <SimpleSlider />
      <Product />
      <Topsale />
      <BottomSlider />
    </div>
  );
};
export default App;
