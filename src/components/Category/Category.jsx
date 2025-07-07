import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/Images/fruits-and-veggies.png";
import DairyCat from "../../assets/Images/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/Images/meat-and-seafood.png";
// import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // Card Start
      <div key={card.id} className="flex-1 basis-[300px] key={carde.id}">
        {/* Card Image Start */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.Image} className="absolute bottom-0" />
        </div>
        {/* Card Image End */}

        {/* Card Content Start */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md hover:scale-105 hover:to-orange-800 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
        {/* Card Content End */}
      </div>
      //   Card End
    );
  });
  return (
    <>
      <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">
          <Heading highlight="Shop" heading="by Category" />

          {/* Category Cards Start */}
          <div className="flex flex-wrap gap-10 md:mt-15 mt-10">
            {renderCards}
          </div>
        </div>
        {/* Category Cards End */}
      </section>
    </>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Freash, organic produce sourced daily from local farms, Explore a wide range of seasonal fruits and crips vegatables.",
    Image: FruitsCat,
    path: "/fruits",
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and youngurt to artisanal cheeses.",
    Image: DairyCat,
    path: "/dairy",
  },

  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. choose from fresh cuts, marinated options, and more.",
    Image: SeaFoodCat,
    path: "/seafood",
  },
];
