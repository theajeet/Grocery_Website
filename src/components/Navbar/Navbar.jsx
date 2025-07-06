import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(25, 14, 20, 0.96)]" : ""}`}>
        <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between">
          {/* For Only Logo Start */}
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          {/* For Only Logo End */}

          {/* Desktp Menu */}
          <ul className="md:flex items-center gap-x-15 hidden">
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Nav Action Start */}
          <div className="flex items-center gap-x-5">
            {/* Input Field Start */}
            <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search......"
                autoComplete="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none italic"
              />
              <button className="bg-gradient-to-b from-red-600 to-bg-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </div>
            {/* Input Field End */}

            <a href="#" className="text-zinc-800 text-2xl">
              <FaHeart />
            </a>
            <a href="#" className="text-zinc-800 text-2xl">
              <FaShoppingCart />
            </a>

            {/* Hamburger */}
            <a
              href="#"
              className="text-zinc-800 text-3xl md:hidden "
              onClick={toggleMenu}
            >
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </a>
          </div>

          {/* Mobile Menu Start */}
          <ul
            className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl shadow-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${
              showMenu ? "left-1/2" : ""
            }`}
          >
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
            {/* Input Field Start */}
            <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search......"
                autoComplete="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none italic"
              />
              <button className="bg-gradient-to-b from-red-600 to-bg-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </li>
            {/* Input Field End */}
          </ul>
          {/* Mobile Menu End */}
        </nav>
        {/* Nav Action End */}
      </header>
    </>
  );
};

export default Navbar;
