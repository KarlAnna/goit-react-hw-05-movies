import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { loader } from './App';

export const SharedLayout = () => {
  return (
    <>
      <header className="bg-[white] shadow-inner">
        <nav className="flex justify-evenly py-4">
          <NavLink
            to="/"
            className="nav-link relative text-lg text-cloud-burst flex items-center"
          >
            Home
          </NavLink>
          <NavLink
            to="movies"
            className="nav-link relative text-lg text-cloud-burst flex items-center"
          >
            Movies
          </NavLink>
          <NavLink
            to="library"
            className="nav-link relative text-lg text-cloud-burst flex items-center"
          >
            Library
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={loader}>
        <Outlet />
      </Suspense>
    </>
  );
};
