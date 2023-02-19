import React from 'react';
import BtnDelete from './BtnDelete';
import BtnArchive from './BtnArsip';
import PropTypes from 'prop-types';

function DetailNote({ id, title, body, createdAt }) {
  return (
    <div className="detail-note">
      <h3>{title}</h3>
      <i>{createdAt}</i>
      <p>{body}</p>
      <BtnArchive id={id} />
      <BtnDelete id={id} />
    </div>
  );
}

DetailNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default DetailNote;
