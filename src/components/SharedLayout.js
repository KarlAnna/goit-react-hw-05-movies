import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { loader } from './ui/loader';

export const SharedLayout = () => {
  return (
    <>
      <header id="header" className="bg-[white] shadow-inner">
        <nav className="flex justify-evenly py-4">
          <NavLink
            to="/"
            className="nav-link relative text-xl lg:text-lg text-primary-text-color flex items-center"
          >
            Home
          </NavLink>
          <NavLink
            to="movies"
            className="nav-link relative text-xl lg:text-lg text-primary-text-color flex items-center"
          >
            Movies
          </NavLink>
          <NavLink
            to="library"
            className="nav-link relative text-xl lg:text-lg text-primary-text-color flex items-center"
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
