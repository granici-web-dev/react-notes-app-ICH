const initialState = {
  data: [],
}

const todoReducer = (state = initialState, action) => {
  console.log(action.type);
  

  return state;
};

export default todoReducer;