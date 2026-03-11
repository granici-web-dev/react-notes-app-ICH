import NoteForm from './NoteForm';
import NoteList from './NoteList';

function Main() {
  return (
    <main className="flex-grow">
      <NoteForm />
      <NoteList />
    </main>
  );
}

export default Main;