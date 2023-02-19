import React, { useEffect, useState } from 'react';
import DetailNote from '../component/DetailNote';
import BtnHomePage from '../component/BtnHomePage';
import { useParams } from 'react-router-dom';
import { getNote } from '../data/data';
import LoadingPage from '../component/LoadingPage';

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setLoading(false);
      setNote(data);
    };
    fetchNote();
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <BtnHomePage />
      <DetailNote {...note} />
    </>
  );
}

export default DetailPage;
