const BOOK__STATUS = 'BOOKSTORE/categories/BOOK__STATUS';

export const checkStatus = (status) => ({ type: BOOK__STATUS, payload: status });

const initialState = {
    categories: [],
};

const reducer__categories = (state = initialState, action = {}) => {
    switch (action.type) {
        case BOOK__STATUS:
            return { ...state, status: action.payload };
        default:
            return state;
    }
};
export default reducer__categories;