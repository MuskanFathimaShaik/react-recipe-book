import React, { useState, useEffect } from "react";
import MealsCard from "./MealsCard";
import { Spin } from "antd";

const TrendingMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealPromises = [];
        for (let i = 0; i < 4; i++) {
          mealPromises.push(
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          );
        }
        const responses = await Promise.all(mealPromises);
        const mealDataArray = await Promise.all(
          responses.map((response) => response.json())
        );
        const meals = mealDataArray.map((data) => data.meals[0]);
        setMealsList(meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {mealsList?.map((meal) => (
            <MealsCard mealData={meal} key={meal?.idMeal} />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(TrendingMeals);
