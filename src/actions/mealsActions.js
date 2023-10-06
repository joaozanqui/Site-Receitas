import axios from "../api/axios";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS,
    FETCH_INGREDIENTS_BEGIN,
    FETCH_INGREDIENTS_ERROR,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_LETTER_BEGIN,
    FETCH_LETTER_ERROR,
    FETCH_LETTER_SUCCESS
} from "./actions";

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL , LETTERS_URL, INGREDIENTS_URL} from "../utils/constants";

export const startFetchCategories = async(dispatch) => { //fotos das comidas na home
    try{
        dispatch({ type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
}

export const startFetchSingleMeal = async(dispatch, id) => {
    try{
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN});
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message});
    }
}

export const startFetchMealByCategory = async(dispatch, category) => {
    try{
        dispatch({type: FETCH_CATEGORY_MEALS_BEGIN});
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        dispatch({type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals})
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message});
    }
}

export const startFetchMealsBySearch = async(dispatch, searchTerm) => {
    try{
        dispatch({ type: FETCH_MEALS_BEGIN});
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({type: FETCH_MEALS_ERROR, payload: error.message});
    }
}

export const startFetchMealsByIngredients = async(dispatch, ingredients) => {
    try{
        dispatch({ type: FETCH_INGREDIENTS_BEGIN});
        const response = await axios.get(`${INGREDIENTS_URL}${ingredients}`);
        dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({type: FETCH_INGREDIENTS_ERROR, payload: error.message});
    }
}

export const startFetchMealsByLetter = async(dispatch, letter) => {
    try{
        dispatch({ type: FETCH_LETTER_BEGIN});
        const response = await axios.get(`${LETTERS_URL}${letter}`);
        dispatch({ type: FETCH_LETTER_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({type: FETCH_LETTER_ERROR, payload: error.message});
    }
}


// mealContext.js
// CategoryPage.js
// MealDetailsPage.js