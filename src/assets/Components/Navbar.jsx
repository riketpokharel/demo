import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import "./Navbar.css"

export const Navbar = () => {
  return <nav>
        <Link to="/" className='title'>
            Website</Link>
    <div>
    <ul>
        <li>
            <NavLink to ="about">ABOUT</NavLink>
        </li>

        <li>
        <NavLink to ="facilities">FACILITIES</NavLink>
        </li>

        <li>
        <NavLink to ="rooms">ROOMS</NavLink>
        </li>

        <li>
        <NavLink to ="gallery">GALLERY</NavLink>
        </li>

        <li>
        <NavLink to ="contacts">CONTACTS</NavLink>
        </li>
        </ul>
        </div>

        <div>
            <ul>
        <li>
        <NavLink to ="login">LOGIN</NavLink>
        </li>

        <li>
        <NavLink to ="signup">SIGNUP</NavLink>
        </li>
    </ul>
    </div>

  </nav>;
}
