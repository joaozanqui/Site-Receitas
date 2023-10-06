import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsByLetter } from '../../actions/mealsActions';

const SearchLetter = () => {
    const navigate = useNavigate();
    const [letter, setLetter] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const { dispatch, meals } = useMealContext();

    const handleLetter = (e) => {

        e.preventDefault();
        if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
            setLetter(e.target.value);
            setErrorMsg("");
        } else {
            setErrorMsg("Termo de busca inválido ...");
        }
    }

    const handleLetterResult = (e) => {
        e.preventDefault();
        navigate("/");
        startFetchMealsByLetter(dispatch, letter);
    }

    return (
        <form className='search-form flex align-center ingredient' onSubmit={(e) => handleLetterResult(e)}>
            <input type="text" className='letter-input text-dark-gray fs-15' placeholder='Letra...' onChange={(e) => handleLetter(e)} />
            <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
                <BsSearch className='btn-icon' size={20} />
            </button>
        </form>
    )
}

export default SearchLetter