const BOOK__STATUS = 'BOOK__STATUS';

export const checkStatus = (status) => ({ type: BOOK__STATUS, payload: status });

const initialState = {
  categories: [],
};

const reducerForCategories = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK__STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default reducerForCategories;
