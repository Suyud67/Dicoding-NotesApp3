import React from 'react';
import PropTypes from 'prop-types';
import { ContextConsumer } from '../utils/Context';

function Searchbar({ keyword, keywordChange }) {
  return (
    <ContextConsumer>
      {(translateContext) => {
        const { language } = translateContext[1];
        return <input type="text" name="search" id="search-note" placeholder={language === 'id' ? 'Cari Note...' : 'Search Note...'} value={keyword} onChange={(e) => keywordChange(e.target.value)} />;
      }}
    </ContextConsumer>
  );
}

Searchbar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default Searchbar;
