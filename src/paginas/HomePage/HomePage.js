import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const {categories, meals, ingredients, letter, categoryLoading, mealsLoading, ingredientsLoading, letterLoading} = useMealContext();

  return (
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      
      { (ingredientsLoading) ? <Loader /> : (ingredients === null) ? <NotFound /> : (ingredients?.length) ? <MealList ingredients = {ingredients} /> : "" }

      { (letterLoading) ? <Loader /> : (letter === null) ? <NotFound /> : (letter?.length) ? <MealList letter = {letter} /> : "" }
      
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;