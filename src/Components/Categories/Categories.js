import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Header from '../Navigation/Header';
import { statusChecker } from '../../redux/categories/categories';
import './Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories, shallowEqual);
  return (
    <>
      <Header />
      <div className="categories">
        <button type="button" className="status__checker__button" onClick={() => dispatch(statusChecker())}>Check Status</button>
        <p className="status__checker__text">{ status }</p>
      </div>
    </>
  );
}
export default Categories;
