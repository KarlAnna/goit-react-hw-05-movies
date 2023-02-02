import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { loader } from './App';

export const SharedLayout  = () => {
    return (
      <>
        <header className="bg-[white] shadow-inner">
          <nav className="flex justify-evenly py-4">
            <NavLink to='/' className="navlink bg-royal-blue text-[white] font-semibold py-[1.5vh] px-[6vw] rounded shadow transition ease-in-out duration-500">Home</NavLink>
            <NavLink to='/movies' className="navlink bg-royal-blue text-[white] font-semibold py-[1.5vh] px-[6vw] rounded shadow transition ease-in-out duration-500">Movies</NavLink>
          </nav>
        </header>
        <Suspense fallback={loader}>
          <Outlet />
        </Suspense>
      </>
    )
}