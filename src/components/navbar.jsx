
"use client";
import { useState } from "react";
import { Search } from "lucide-react";


const Navbar = () => {
  const [showHello, setShowHello] = useState(false);

  const toggleHello = () => {
    setShowHello((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between px-2 py-4 sm:px-6 overflow-x-hidden ">
      <div>
        <img src="/assets/Logo.png" className="sm:w-[5rem]" />
      </div>

      <div className="relative w-[11rem] max-w-xs sm:w-[18rem] sm:ml-[2rem] xl:mr-[10rem]">
        <input
          type="text"
          placeholder="Search Creators"
          className="w-full py-1 rounded-full pl-4 placeholder:opacity-100 placeholder:text-center text-gray-900 border border-gray-300 focus:outline-none focus:border-green-400 sm:w-[10rem] lg:w-[15rem] xl:w-[20rem] "
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-2 lg:flex xl:gap-4">
        <a href="/favorite">
          <img src="/assets/FavCreators.png" className="lg:h-5 " />
        </a>

        <a href="/merchandise">
          <img src="/assets/Merchandise.png" className="lg:h-5 " />
        </a>

        <a href="/brand">
          <img src="/assets/Brand.png" className="lg:h-5" />
        </a>

        <a href="/digital">
          <img src="/assets/Digital.png" className="lg:mt-[7px] lg:h-[27px]" />
        </a>

        <div
          className="pl-3 sm:flex sm:items-center sm:justify-center"
          onClick={toggleHello}
        >
          <img src="/assets/profilebar.png" />
        </div>
      </div>

      {/* Hamburger Icon */}
      <div onClick={toggleHello} className="cursor-pointer sm:hidden">
        <img src="/assets/ham.png" className="h-7 sm:h-[3rem] lg:hidden" />
      </div>

      {/* Hello Div */}
      {showHello && (
        <div className="absolute top-[5rem] right-2 shadow-md lg:right-[5rem]">
          <img src="/assets/profile.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
