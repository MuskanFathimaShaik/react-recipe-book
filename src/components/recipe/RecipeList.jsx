import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipesCard";
import { Spin } from "antd";

const RecipeList = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(console.log);
  }, [categoryName]);

  if (recipes?.meals === null) {
    return (
      <div className="flex justify-center items-center">
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="not-found-gif"
          width="700"
        />
      </div>
    );
  }
  return (
    <div className="h-full w-full flex  justify-center items-center mt-6">
      {loading ? (
        <div className="mt-52">
          <Spin />
        </div>
      ) : (
        <section className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {recipes?.meals?.map(({ idMeal, strMealThumb, strMeal }) => (
            <RecipeCard
              key={idMeal}
              category={categoryName}
              imgUrl={strMealThumb}
              recipeName={strMeal}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default RecipeList;
