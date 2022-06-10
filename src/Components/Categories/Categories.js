import React from 'react';
import Header from '../Navigation/Header';
import './Categories.css';

function Categories() {
  return (
    <>
      <Header />
      <div className="categories">
        <button type="button" className="status__checker__button">Check Status</button>
      </div>
    </>
  );
}
export default Categories;
