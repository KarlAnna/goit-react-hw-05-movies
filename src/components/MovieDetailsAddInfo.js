import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { loader } from './ui/loader';

export const MovieDetailsAddInfo = ({ backLinkHref }) => {
  return (
    <div className="flex flex-col items-center py-2">
      <h2>Additional Information</h2>
      <ul className="flex gap-[30vw]">
        <li>
          <NavLink
            className="info-link transition ease-in-out duration-500 inline-flex items-center font-semibold text-lg p-1"
            to={`cast`}
            state={backLinkHref}
          >
            <RiArrowRightSLine className="info-link-icon duration-500 inline" />
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="info-link transition ease-in-out duration-500 font-semibold text-lg p-1"
            to={`reviews`}
            state={backLinkHref}
          >
            <RiArrowRightSLine className="info-link-icon duration-500 inline" />
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={loader}>
        <Outlet />
      </Suspense>
    </div>
  );
};
