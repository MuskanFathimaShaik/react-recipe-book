import SearchComponent from "./ui/SearchModal";
import NavLink from "./NavLink";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="md:hidden text-slate-900 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <HiX className="w-6 h-6" />
        ) : (
          <HiMenu className="w-6 h-6" />
        )}
      </button>

      <nav className="hidden md:flex gap-5 items-center text-slate-900 font-medium">
        <NavLink urlPath="/">Home</NavLink>
        <NavLink urlPath="/categories">Categories</NavLink>
        <SearchComponent />
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 bg-white w-full border-b border-slate-900 shadow-md z-10">
          <nav className="flex flex-col gap-3 p-4 items-center text-slate-900 font-medium">
            <NavLink urlPath="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink urlPath="/categories" onClick={toggleMenu}>
              Categories
            </NavLink>
            <SearchComponent />
          </nav>
        </div>
      )}
    </>
  );
};

export default React.memo(HeaderLinks);
