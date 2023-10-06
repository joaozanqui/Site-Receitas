import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import SearchIngredient from './SearchIngredient';
import SearchLetter from './SearchLetter';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <h1 className='text-white header-title ls-2'>PROCURE UMA RECEITA</h1>
        <SearchForm />
        <SearchIngredient />
        <SearchLetter />
      </div>
    </header>
  )
}

export default Header