import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Spin } from "antd";
import RecipeCard from "../RecipesCard";
import RecipeDetailsCard from "./RecipeDetailsCard";

const RecipeDetails = () => {
  const { recipeName } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails(data);
        setLoading(false);
      })
      .catch(console.log);
  }, [recipeName]);

  if (recipeDetails?.meals === null) {
    return (
      <div className="flex justify-center items-center ">
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="not-found-gif"
          width="700"
        />
      </div>
    );
  }
  return (
    <div className="h-full w-full flex items-center justify-center recipe-details-ui">
      {loading ? (
        <div className="mt-52">
          <Spin />
        </div>
      ) : (
        <>
          {recipeDetails?.meals?.length === 1 ? (
            recipeDetails?.meals?.map((recipeObj, idx) => (
              <RecipeDetailsCard recipeDetails={recipeObj} key={idx} />
            ))
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">
              {recipeDetails?.meals?.map((recipeObj, idx) => (
                <RecipeCard
                  imgUrl={recipeObj?.strMealThumb}
                  recipeName={recipeObj?.strMeal}
                  category={recipeObj?.strCategory}
                  key={idx}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default RecipeDetails;
