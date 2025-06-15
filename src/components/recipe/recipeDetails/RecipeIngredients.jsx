import React from "react";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <section
      style={{ backgroundColor: "#48cae4" }}
      className="rounded-lg h-[32rem] flex flex-col   items-center middle-container-ui  overflow-y-auto
 [&::-webkit-scrollbar]:w-2
 [&::-webkit-scrollbar-track]:bg-white
 [&::-webkit-scrollbar-thumb]:bg-gray-300
 [&::-webkit-scrollbar-thumb]:rounded
 dark:[&::-webkit-scrollbar-track]:bg-slate-100
 dark:[&::-webkit-scrollbar-thumb]:bg-slate-300"
    >
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-3xl">Ingredients</h1>

        <ul className="text-xl list-disc flex flex-col gap-1">
          {ingredients.map((obj, idx) => (
            <li key={idx}>
              {obj.measure} {obj.ingredient}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(RecipeIngredients);
