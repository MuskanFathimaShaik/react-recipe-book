import React from "react";

const RecipeHeader = ({ strMeal, strCategory, strArea }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-medium">
        {strMeal}
      </h1>
      <div className="flex gap-4">
        <h2 className="text-xs sm:text-lg md:text-xl lg:text-2xl">
          Category: {strCategory}
        </h2>
        <h2 className="text-xs sm:text-lg md:text-xl lg:text-2xl">
          Cuisine: {strArea}
        </h2>
      </div>
    </header>
  );
};

export default React.memo(RecipeHeader);
