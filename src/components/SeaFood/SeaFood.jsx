import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/Images/seafood-banner.jpg"

const SeaFood = () => {
  return (
    <>
      <div>
        <CategoryPage title="Meat and SeaFood" bgImage={BgSeaFood} categories={["Meat", "SeaFood"]}/>
      </div>
    </>
  );
};

export default SeaFood;
