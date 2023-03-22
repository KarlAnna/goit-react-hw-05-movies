import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import { SharedLayout } from './components/SharedLayout';
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const Library = lazy(() => import('./pages/Library'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));
const Queue = lazy(() => import('./components/Queue'));
const Liked = lazy(() => import('./components/Liked'));

export const loader = (
  <div className="flex items-center justify-center py-[40vh]">
    <MoonLoader
      color="#c70039"
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="library" element={<Library />}>
          <Route path="queue" element={<Queue />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
