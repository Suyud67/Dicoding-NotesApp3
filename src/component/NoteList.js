import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes }) {
  if (!notes.length) {
    return <p>Notes is not found!</p>;
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
