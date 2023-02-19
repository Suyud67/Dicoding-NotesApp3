import React from 'react';
import ArchivedItem from './ArchivedItem';
import PropTypes from 'prop-types';

function ArchivedList({ notes }) {
  if (!notes.length) {
    return <p>Archive notes not found!</p>;
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <ArchivedItem key={note.id} {...note} />
      ))}
    </div>
  );
}

ArchivedList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchivedList;
