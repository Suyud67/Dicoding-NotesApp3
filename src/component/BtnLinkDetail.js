import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContextConsumer } from '../utils/Context';

function BtnLinkDetail({ id }) {
  return (
    <ContextConsumer>
      {(translateContext) => {
        const { language } = translateContext[1];
        return (
          <Link to={`/notes/detail/${id}`} className="link-detail">
            {language === 'id' ? 'lihat detail note' : 'check detail note'}
          </Link>
        );
      }}
    </ContextConsumer>
  );
}

BtnLinkDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnLinkDetail;
