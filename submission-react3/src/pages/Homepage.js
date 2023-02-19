import React, { useEffect, useState } from 'react';
import ContainerHeader from '../component/ContainerHeader';
import ContainerNotes from '../component/ContainerNotes';
import { getActiveNotes } from '../data/data';
import { useSearchParams } from 'react-router-dom';
import BtnAddPage from '../component/BtnAddPage';
import LoadingPage from '../component/LoadingPage';
import PropTypes from 'prop-types';

function Homepage({ name, logout }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  // fetch notes
  useEffect(() => {
    const getNotes = async () => {
      const { data } = await getActiveNotes();
      setLoading(false);
      setNotes(data);
    };

    getNotes();
  }, [notes]);

  // event search
  const eventSearch = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  // filter notes by name
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ContainerHeader keyword={keyword} keywordChange={eventSearch} name={name} logout={logout} />
      <ContainerNotes notes={filteredNotes} />
      <BtnAddPage />
    </>
  );
}

Homepage.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Homepage;
