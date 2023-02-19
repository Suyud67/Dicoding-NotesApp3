import { useEffect, useState } from 'react';
import ArchivedList from '../component/ArchivedList';
import BtnHomePage from '../component/BtnHomePage';
import { getArchivedNotes } from '../data/data';
import LoadingPage from '../component/LoadingPage';
import { ContextConsumer } from '../utils/Context';

function ArchivedPage() {
  const [loading, setLoading] = useState(true);
  const [archiveds, setArchived] = useState([]);

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      const { data } = await getArchivedNotes();
      setLoading(false);
      setArchived(data);
    };
    fetchArchivedNotes();
  }, [archiveds]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <ContextConsumer>
      {(trasnlateContext) => {
        const { language } = trasnlateContext[1];
        return (
          <>
            <BtnHomePage />
            <div className="container-unchivedNotes">
              <div className="header">
                <h3>{language === 'id' ? 'Kumpulan Arsip Note' : 'Archive Notes'}</h3>
              </div>
              <ArchivedList notes={archiveds} />
            </div>
          </>
        );
      }}
    </ContextConsumer>
  );
}

export default ArchivedPage;
