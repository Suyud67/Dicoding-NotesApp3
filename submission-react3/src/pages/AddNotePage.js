import React from 'react';
import FormAddNote from '../component/FormAddNote';
import BtnHomePage from '../component/BtnHomePage';
import { addNote } from '../data/data';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
  const navigate = useNavigate();

  function handleAddNote(note) {
    addNote(note);
    window.alert('Successful to add note');

    navigate('/');
  }

  return (
    <>
      <BtnHomePage />
      <div className="container-form">
        <div className="header">
          <h2>Form Add Note</h2>
        </div>
        <FormAddNote addNote={handleAddNote} />
      </div>
    </>
  );
}

export default AddNotePage;
