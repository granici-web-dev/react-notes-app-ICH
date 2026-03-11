import NoteItem from './NoteItem';

function NoteList() {
  return (
    <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-4 mb-4">
      <NoteItem />
    </div>
  );
}

export default NoteList;
