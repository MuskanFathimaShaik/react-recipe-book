import SearchComponent from "./ui/SearchModal";
import NavLink from "./NavLink";
import React from "react";

const HeaderLinks = () => {
  return (
    <nav className="flex gap-5 items-center text-slate-900 font-medium">
      <NavLink urlPath="/">Home</NavLink>
      <NavLink urlPath="/categories">Categories</NavLink>
      <SearchComponent />
    </nav>
  );
};

export default React.memo(HeaderLinks);
