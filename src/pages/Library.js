import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { loader } from '../components/App';

const Library = () => {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex gap-[30vw] py-5">
        <li>
          <NavLink
            className="library-link transition ease-in-out duration-300 inline-flex items-center font-semibold text-lg p-1"
            to={`queue`}
          >
            Queue
          </NavLink>
        </li>
        <li>
          <NavLink
            className="library-link transition ease-in-out duration-300 font-semibold text-lg p-1"
            to={`watched`}
          >
            Watched
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={loader}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Library;
