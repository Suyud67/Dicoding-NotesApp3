import React from 'react';
import { unarchiveNote } from '../data/data';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaUndoAlt } from 'react-icons/fa';

function BtnUndo({ id }) {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={`/notes/unarchive/${id}`}
      onClick={(e) => {
        e.preventDefault();
        unarchiveNote(id);
        navigate('/');
      }}
      id="btn-undo"
    >
      <FaUndoAlt />
    </a>
  );
}

BtnUndo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnUndo;
