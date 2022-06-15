// Define a constant for the action types
const STATUS_CHECKER = 'STATUS_CHECKER';

// Reducer for the status checker
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS_CHECKER:
      return 'Under construction';
    default:
      return state;
  }
}

// Actions creators
export function statusChecker() {
  return {
    type: STATUS_CHECKER,
  };
}
