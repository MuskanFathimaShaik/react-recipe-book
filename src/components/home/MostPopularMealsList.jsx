import React, { useState, useEffect } from "react";
import MealsCard from "./MealsCard";
import { Spin } from "antd";

const MostPopularMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealIds = new Set(); // Set to store unique meal IDs
        const meals = [];

        while (meals.length < 4) {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await response.json();
          const meal = data.meals[0];

          // Check if meal ID is unique
          if (!mealIds.has(meal.idMeal)) {
            mealIds.add(meal.idMeal);
            meals.push(meal);
          }
        }

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
        <div className="flex items-center justify-center">
          <Spin />
        </div>
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

export default React.memo(MostPopularMeals);
