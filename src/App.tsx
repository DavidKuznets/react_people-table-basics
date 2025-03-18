import { Loader } from './components/Loader';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './page/HomePage';
import PageNotFound from './page/PageNotFound';
import PeoplePage from './page/PeoplePage';
import PersonDetailsPage from './page/PersonDetailsPage';
import { Navigations } from './components/Loader/Navigations';
import { Navigate } from 'react-router-dom';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (window.location.pathname === '/home') {
    return <Navigate to="/" replace />;
  }

  return (
    <div data-cy="app">
      {loading ? (
        <>
          <main className="section">
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route
                  path="/people/:slug"
                  element={<PersonDetailsPage />}
                />{' '}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </main>
        </>
      ) : (
        <Loader />
      )}
      <Navigations />
    </div>
  );
};
