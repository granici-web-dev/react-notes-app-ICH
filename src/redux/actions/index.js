export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: Date.now(),
      title: note.title,
      content: note.content,
    },
  };
};

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: { id },
});

export const editNote = (note) => ({
  type: 'EDIT_NOTE',
  payload: note,
});

export const updateNote = (note) => ({
  type: 'UPDATE_NOTE',
  payload: note,
});