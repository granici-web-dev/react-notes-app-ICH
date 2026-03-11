import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addNote, updateNote } from '../redux/actions';

function NoteForm({ dispatch, editingNote }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (editingNote) {
      reset({ title: editingNote.title, content: editingNote.content });
    }
  }, [editingNote, reset]);

  const onSubmit = (data) => {
    if (editingNote) {
      dispatch(updateNote({ ...editingNote, ...data }));
    } else {
      dispatch(addNote(data));
    }
    reset({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-2xl m-auto my-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          className="border border-solid border-gray-400 py-3 px-4"
          type="text"
          id="title"
          placeholder="Your note"
          {...register('title', { required: true })}
        />
        {errors.title && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="content">Content</label>
        <textarea
          className="border border-solid border-gray-400 py-3 px-4"
          id="content"
          placeholder="Some text"
          {...register('content', { required: true })}
        />
        {errors.content && <span className="text-red-500">This field is required</span>}
      </div>

      <input
        className={`text-white py-4 rounded-2xl transition duration-200 ease-in-out cursor-pointer
          ${editingNote ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-700'}`}
        type="submit"
        value={editingNote ? 'Save note' : 'Add note'}
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  editingNote: state.editingNote,
});

export default connect(mapStateToProps)(NoteForm);
