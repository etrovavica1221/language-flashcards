/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Categories.css';

const CategoriesList = ({ categoryState, setCategoryState }) => {
  const allCategories = ['My Cards', 'Numbers', 'Family Tree', 'Shopping', 'Food and Drink', 'Animals', 'Sport and Activities', 'Travel', 'Create Your Own Flashcard'];
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setCategoryState({
      currentCategory: e.target.getAttribute('data-key'),
    });
    history.push("/learn");
  };
  return (
    <div className="Categories">
      <h1>Learn using flashcards by Category</h1>
      <ul>{allCategories.map((category) => <li onClick={handleClick} className="catList" data-key={category}> {category} </li>)}</ul>
    </div>
  );
};

export default CategoriesList;
