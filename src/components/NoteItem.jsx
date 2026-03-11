import { connect } from 'react-redux';
import Button from './ui/Button';
import { deleteNote, editNote } from '../redux/actions/index';

function NoteItem({ notes, dispatch }) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="border border-solid border-gray-400 p-4 rounded-lg mb-3">
          <h2 className="text-xl font-bold mb-2">{note.title}</h2>
          <p>{note.content}</p>
          <div className="mt-3 flex gap-3">
            <Button onClick={() => dispatch(editNote(note))} title="Edit" />
            <Button onClick={() => dispatch(deleteNote(note.id))} title="Delete" />
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.data,
});

export default connect(mapStateToProps)(NoteItem);
