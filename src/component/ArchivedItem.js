import React from 'react';
import BtnUndo from './BtnUndo';
import BtnDelete from './BtnDelete';
import PropTypes from 'prop-types';

function ArchivedItem({ id, title, body, createdAt }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <i>{createdAt}</i>
      <p>{body}</p>
      <BtnUndo id={id} />
      <BtnDelete id={id} />
    </div>
  );
}

ArchivedItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ArchivedItem;
