const initialState = {
  data: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        data: state.data.filter((note) => note.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
