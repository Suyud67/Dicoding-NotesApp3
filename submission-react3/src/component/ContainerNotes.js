import React from 'react';
import NoteList from './NoteList';
import PropTypes from 'prop-types';
import { ContextConsumer } from '../utils/Context';

function ContainerNotes({ notes }) {
  return (
    <ContextConsumer>
      {(translateContext) => {
        const { language } = translateContext[1];
        return (
          <div className="container-notes">
            <div className="header">
              <h2>{language === 'id' ? 'Kumpulan Note Saya' : 'My Notes'}</h2>
            </div>
            <NoteList notes={notes} />
          </div>
        );
      }}
    </ContextConsumer>
  );
}

ContainerNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContainerNotes;
