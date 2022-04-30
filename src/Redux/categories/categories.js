const STATUS__CHECKER = 'STATUS__CHECKER';

export const statusChecker = () => ({
  type: STATUS__CHECKER,
});

const categoriesReducer = (state = [], actions) => {
  switch (actions.type) {
    case STATUS__CHECKER:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
