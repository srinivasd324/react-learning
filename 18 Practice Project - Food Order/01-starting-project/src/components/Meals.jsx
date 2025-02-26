import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      const mealResponse = await fetch("http://localhost:3000/meals");
      if (!mealResponse.ok) {
      }
      const meals = await mealResponse.json();
      setLoadMeals(meals);
    }
    getMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {loadMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}
