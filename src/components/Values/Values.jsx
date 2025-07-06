import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { FaLeaf, FaSeedling } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import Basket from "../../assets/Images/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.Icon}
          </span>
        </div>

        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.Icon}
          </span>
        </div>

        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20 ">
          <Heading highlight="Our" heading="Values" />

          <div className="flex md:flex-row gap-15 flex-col md:gap-3 mt-15">
            {/* Left Values Start */}
            <div className="md:min-h-100 gap-15 flex flex-col justify-between">
              {leftValues}
            </div>
            {/* Left Values End */}

            {/* Image Start */}
            <div className="md:flex w-1/2 hidden ">
              <img src={Basket} />
            </div>
            {/* Image End */}

            {/* Right Values Start */}
            <div className="md:min-h-100 gap-15 flex flex-col justify-between">
              {rightValues}
            </div>
            {/* Right Values End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long eastablished fact that a reander will be distracted by the readable.",
    Icon: <FaHeart />,
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long eastablished fact that a reander will be distracted by the readable.",
    Icon: <FaLeaf />,
  },

  {
    id: 3,
    title: "Food saftey",
    para: "Lorem Ipsum dummy text of the printing and typesetting industry.",
    Icon: <MdHealthAndSafety />,
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum dummy text of the printing and typesetting industry.",
    Icon: <FaSeedling />,
  },
];
