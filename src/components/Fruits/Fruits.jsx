import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from "../../assets/Images/fruits-banner.jpg"
const Fruits = () => {
  return (
    <>
      <div>
        <CategoryPage title="Fruits and Veggies" bgImage={BgFruits} categories={["Fruits", "Vegetables"]}/>
      </div>
    </>
  );
};

export default Fruits;
