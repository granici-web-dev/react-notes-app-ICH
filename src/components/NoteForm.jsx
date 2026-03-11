import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions';

function NoteForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addNote(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-2xl m-auto my-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          className="border border-solid border-gray-400 py-3 px-4"
          type="text"
          id="title"
          name="title"
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
          name="content"
          placeholder="Some text"
          {...register('content', { required: true })}
        />
        {errors.content && <span className="text-red-500">This field is required</span>}
      </div>

      <input
        className="bg-gray-900 text-white py-4 rounded-2xl transition duration-200 ease-in-out hover:bg-gray-700 cursor-pointer"
        type="submit"
        value="Add note"
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.data,
  };
};

export default connect(mapStateToProps)(NoteForm);
