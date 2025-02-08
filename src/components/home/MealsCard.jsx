import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const MealsCard = ({ mealData }) => {
  return (
    <div className="bg-white border h-96 flex flex-col gap-2 rounded overflow-hidden">
      <header
        style={{
          backgroundImage: `url(${mealData?.strMealThumb})`,
          backgroundSize: "cover",
        }}
        className="h-56"></header>
      <div className="font-medium flex flex-col flex-1 gap-2 p-2 text-slate-900">
        <h1 className="text-lg">{mealData?.strMeal}</h1>
        <h2>Category: {mealData?.strCategory}</h2>
        <h3>Cuisine: {mealData?.strArea}</h3>
        <Link to={`/recipe/${mealData?.strMeal}`}>
          <Button
            type="primary"
            className="w-full bg-slate-900 hover:transition">
            View Recipe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(MealsCard);
