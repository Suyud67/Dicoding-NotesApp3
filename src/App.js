import React, { useEffect, useMemo, useState } from 'react';
import Loginpage from './pages/Loginpage';
import SignUpPage from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import { putAccessToken, getUserLogged } from './data/data';
import LoadingPage from './component/LoadingPage';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import ArchivedPage from './pages/ArchivedPage';
import { ContextProvider } from './utils/Context';

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'ligth');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'id');

  // if user login success
  const handleLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthUser(data);
  };

  // fetch logged user and store it to state authUser
  useEffect(() => {
    const getUserLogin = async () => {
      const { data } = await getUserLogged();
      setAuthUser(data);
      setLoading(false);
    };

    getUserLogin();
  }, [authUser]);

  const logout = () => {
    setAuthUser(null);
    putAccessToken('');
  };

  // handle event btn theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'ligth' ? 'dark' : 'ligth';

      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // handle event translate
  const toggleTranslate = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'id' ? 'en' : 'id';

      localStorage.setItem('language', newLanguage);
      return newLanguage;
    });
  };

  // save theme
  const translateContext = useMemo(() => {
    return {
      language,
      toggleTranslate,
    };
  }, [language]);

  // fetch when theme is change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // save theme
  const toggleContext = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  // render section

  if (loading) {
    return <LoadingPage />;
  }

  if (authUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<Loginpage loginSuccess={handleLoginSuccess} />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route>
      </Routes>
    );
  }

  return (
    <>
      <ContextProvider value={[toggleContext, translateContext]}>
        <Routes>
          <Route path="/" element={<Homepage name={authUser.name} logout={logout} />}></Route>
          <Route path="/notes/add" element={<AddNotePage />}></Route>
          <Route path="/notes/archived" element={<ArchivedPage />}></Route>
          <Route path="/notes/detail/:id" element={<DetailPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
