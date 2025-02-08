import RecipeHeader from "./RecipeHeader";
import RecipeYtVideo from "./YtRecipeVideo";
import RecipeThumbnail from "./AsideRecipeThumbnail";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import React from "react";

const RecipeDetailsCard = ({ recipeDetails }) => {
  const {
    strYoutube,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strSource,
  } = recipeDetails || {};

  let ingredients = [];
  Object.keys(recipeDetails).forEach((item, idx) => {
    if (recipeDetails[`strIngredient${idx}`]) {
      ingredients.push({
        ingredient: recipeDetails[`strIngredient${idx}`],
        measure: recipeDetails[`strMeasure${idx}`],
      });
    }
  });
  const steps = strInstructions
    .split("\r\n\r\n")
    .filter((step) => step.trim() !== "");
  const replacedSteps = steps.map((ste, idx) => ste.replaceAll(idx + 1, " "));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center card-ui">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <section className="h-screen w-full flex flex-col  px-4 gap-6 mt-6 rounded">
        <RecipeHeader
          strMeal={strMeal}
          strCategory={strCategory}
          strArea={strArea}
        />
        <section className="mx-auto">
          <RecipeYtVideo strYoutube={strYoutube} />
        </section>

        <div className="flex justify-center px-2 items-center gap-2 w-full ">
          <RecipeThumbnail strMealThumb={strMealThumb} strSource={strSource} />
          <RecipeIngredients ingredients={ingredients} />
          <RecipeInstructions replacedSteps={replacedSteps} />
        </div>
        <div className="invisible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tenetur, velit natus exercitationem, esse officia dolorem sed ipsam
          repellendus ad quaerat nihil quisquam autem explicabo alias est illo
          dolor sit?
        </div>
      </section>
    </div>
  );
};

export default React.memo(RecipeDetailsCard);
