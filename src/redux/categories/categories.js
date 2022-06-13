const STATUS_CHECKER = 'STATUS_CHECKER';

const currentState = [];

const categoriesReducer = (state = currentState, actions) => {
  switch (actions.type) {
    case STATUS_CHECKER:
      return 'Under Construction';
    default:
      return state;
  }
};
export default categoriesReducer;

export function statusChecker() {
  return {
    type: STATUS_CHECKER,
  };
}
