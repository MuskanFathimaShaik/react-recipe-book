import React from "react";

const RecipeHeader = ({ strMeal, strCategory, strArea }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="text-xs  md:text-2xl lg:text-3xl font-medium">
        {strMeal}
      </h1>
      <div className="flex gap-4">
        <h2 className="text-xs md:text-xl lg:text-2xl">
          <span className="hidden md:inline-block">Category:</span>{" "}
          {strCategory}
        </h2>
        <h2 className="text-xs md:text-xl lg:text-2xl">
          <span className="hidden md:inline-block">Cuisine:</span> {strArea}
        </h2>
      </div>
    </header>
  );
};

export default React.memo(RecipeHeader);
