import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { statusChecker } from '../../Redux/categories/categories';
import Header from '../Header/Header';
import './Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories, shallowEqual);
  return (
    <>
      <Header />
      <div className="categories">
        <button type="button" className="status__checker__button" onClick={() => dispatch(statusChecker())}> STATUS </button>
        <p className="status__message">{status}</p>
      </div>
    </>
  );
}
export default Categories;
