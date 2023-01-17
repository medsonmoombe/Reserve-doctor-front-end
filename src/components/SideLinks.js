import React from 'react';
import { useDispatch } from 'react-redux';
import Link from '@mui/material/Link';
import { logout } from '../redux/user/RegisterLoginSlice';
import { SideBarStyle } from './Styles';

const SideLinks = () => {
  const dispatch = useDispatch();
  const navLinks = [
    { url: '/user/dashboard', name: 'Home', id: 1 },
    { url: '/user/add_doctor', name: 'Add Doctor', id: 2 },
    { url: '/reserve', name: 'Add Reservation', id: 3 },
    { url: '/reservations', name: 'My Reservations', id: 4 },
    { url: '/doctors/:id', name: 'Delete Doctor', id: 5 },
  ];

  const logoutButton = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  return (
    <>
      <ul
        className="-mt-32 md:mt-26 w-full pl-8 flex flex-col list-none gap-2 md:gap-3"
      >
        {
          navLinks.map((nav) => (
            <li
              style={SideBarStyle.liItem}
              key={nav.id}
              className="text-white uppercase text-center"
            >
              <Link
                href={nav.url}
                underline="none"
                sx={SideBarStyle.linkItem}
              >
                {nav.name}
              </Link>
            </li>
          ))
        }
        <button
          type="button"
          className="logout"
          onClick={() => logoutButton()}
        >
          <i className="fa-solid fa-arrow-right-from-bracket me-2" />
          Logout
        </button>
      </ul>
    </>
  );
};

export default SideLinks;
