import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import { SharedLayout } from './SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const loader = (
  <MoonLoader
    color="#6347f9"
    cssOverride={{ display: 'block', margin: '0 auto', padding: "18 0" }}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);

export const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
