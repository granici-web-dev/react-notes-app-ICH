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