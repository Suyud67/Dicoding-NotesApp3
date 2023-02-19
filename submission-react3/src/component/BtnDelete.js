import React from 'react';
import { deleteNote } from '../data/data';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function BtnDelete({ id }) {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={`/notes/delete/${id}`}
      onClick={(e) => {
        e.preventDefault();
        if (window.confirm(`are you sure you want delete this note?`)) {
          deleteNote(id);
          navigate('/');
        } else {
          return false;
        }
      }}
      id="btn-delete"
    >
      <FaTrashAlt />
    </a>
  );
}

BtnDelete.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnDelete;
