import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components";
import './SharedLayout.css'

const StyledLink = styled(NavLink)`
  color: #e0e0a3;
  background: none;
  border: 2px solid;
  border-radius: 8px;
  line-height: 1;
  font-size: 1.2rem;
  padding: 2vh 6vw;
  text-decoration: none;
  transition: 0.25s ease-in-out;

  &.active, &:hover {
    box-shadow: 0 0.32em 0.63em #fefeb6;
    transform: translateY(-0.25em);
  }
`

export const SharedLayout  = () => {
    return (
      <header>
        <nav className='nav'>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/movies'>Movies</StyledLink>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </header>
    )
}

// export default SharedLayout