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

    case 'EDIT_NOTE':
      return {
        ...state,
        editingNote: action.payload,
      };

    case 'UPDATE_NOTE':
      return {
        ...state,
        data: state.data.map((note) => (note.id === action.payload.id ? action.payload : note)),
        editingNote: null,
      };

    default:
      return state;
  }
};

export default todoReducer;
