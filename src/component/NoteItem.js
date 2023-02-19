import React from 'react';
import BtnLinkDetail from './BtnLinkDetail';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <i>{createdAt}</i>
      <p>{body}</p>
      <BtnLinkDetail id={id} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
