import HeaderLinks from "./HeaderLinks";
import React from "react";

const Header = () => {
  return (
    <div className="flex border-b p-2 border-slate-900 justify-between items-center w-full ">
      <h1 className="font-semibold text-slate-900 text-xl">
        Tasty Tales <span>(Browse Through Over 10,000 Tasty Recipes)</span>
      </h1>
      <HeaderLinks />
    </div>
  );
};

export default React.memo(Header);
