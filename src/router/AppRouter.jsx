import { Switch, Route } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import CategoriesList from "../components/categories/CategoriesList";
import RecipeList from "../components/recipe/RecipeList";
import RecipeDetails from "../components/recipe/recipeDetails/RecipeDetails";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/categories" component={CategoriesList} />
      <Route exact path="/categories/:categoryName" component={RecipeList} />
      <Route path="/recipe/:recipeName" component={RecipeDetails} />
    </Switch>
  );
};

export default AppRouter;
