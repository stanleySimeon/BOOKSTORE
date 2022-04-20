import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../../Redux/categories/categories';
import Header from '../Header/Header';
import './Categories.css';

function Categories() {
  const status = useSelector((state) => (state.categoriesReducer.status ? state.categoriesReducer.status : ''),
    shallowEqual);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="categories">
        <button type="button" className="status__checker__button" onClick={() => dispatch(checkStatus('Under construction'))}> STATUS </button>
        <p className="status__message">{status}</p>
      </div>
    </>
  );
}
export default Categories;
