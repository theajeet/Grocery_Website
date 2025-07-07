import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/Images/dairy-banner.jpg"
const Dairy = () => {
  return (
    <>
      <div>
        <CategoryPage title="Dairy and Eggs" bgImage={BgDairy} categories={["Dairy", "Eggs"]}/>
      </div>
    </>
  );
};

export default Dairy;
