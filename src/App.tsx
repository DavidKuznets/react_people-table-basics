import { Loader } from './components/Loader';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './page/HomePage';
import PageNotFound from './page/PageNotFound';
import PeoplePage from './page/PeoplePage';
import PersonDetailsPage from './page/PersonDetailsPage';
import { Navigations } from './components/Loader/Navigations';
import { Navigate } from 'react-router-dom';

export const App = () => {
  const [loading, setLoading] = useState(false); // Початково false
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/people')) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [location.pathname]);

  return (
    <div data-cy="app">
      {loading ? (
        <Loader /> // Показуємо Loader, коли loading === true
      ) : (
        <>
          <main className="section">
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/people/:slug" element={<PersonDetailsPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </main>
        </>
      )}
      <Navigations />
    </div>
  );
};
