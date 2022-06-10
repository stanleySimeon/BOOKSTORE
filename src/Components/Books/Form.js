import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="form">
      <div className="form__title">
        <h2>Add a book</h2>
      </div>
      <div className="form__input">
        <input type="text" placeholder="Title" />
      </div>
      <div className="form__input">
        <input type="text" placeholder="Author" />
      </div>
      <div className="form__input">
        <input type="submit" className="add__book" />
      </div>
    </div>
  );
}
export default Form;
