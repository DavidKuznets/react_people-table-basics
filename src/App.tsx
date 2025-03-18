import { Loader } from './components/Loader';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './page/HomePage';
import PageNotFound from './page/PageNotFound';
import PeoplePage from './page/PeoplePage';
import PersonDetailsPage from './page/PersonDetailsPage';
import { Navigations } from './components/Loader/Navigations';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div data-cy="app">
      <Navigations />

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:slug" element={<PersonDetailsPage />} />{' '}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
