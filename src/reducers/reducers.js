export const GOTHouses = (state = [], action) => {
  switch (action.type) {
  case 'STORE_HOUSES':
    return action.gotHouses;
  default:
    return state;
  }
};
