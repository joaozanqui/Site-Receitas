import React, {useState, useEffect} from 'react';
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsByIngredients } from '../../actions/mealsActions';

const SearchIngredient = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleIngredients = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setIngredients(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Termo de busca inválido ...");
    }
  }

  const handleIngredientsResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsByIngredients(dispatch, ingredients);
  }

  return (
    <form className='search-form flex align-center ingredient' onSubmit={(e) => handleIngredientsResult(e)}>
      <input type = "text" className='form-control-input text-dark-gray fs-15' placeholder='Digite um ingrediente ...' onChange={(e) => handleIngredients(e)} />
      <button type = "submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size = {20} />
      </button>
    </form>
  )
}

export default SearchIngredient