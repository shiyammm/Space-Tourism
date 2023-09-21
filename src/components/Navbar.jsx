import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';
import Close from '../assets/shared/icon-close.svg';
import Menu from '../assets/shared/icon-hamburger.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const NavLinks = [
    {
      id: 'home',
      order: '00',
      title: 'HOME',
    },
    {
      id: 'destination',
      order: '01',
      title: 'DESTINATION',
    },
    {
      id: 'crew',
      order: '02',
      title: 'CREW',
    },
    {
      id: 'technology',
      order: '03',
      title: 'TECHNOLOGY',
    },
  ];

  return (
    <nav className="w-full absolute top-[2rem] ">
      <div className="flex justify-between items-center ">
        <div className="w-[2.5rem] h-[2.5rem] ml-[4rem]">
          <NavLink to="/home">
            <img className="w-full h-full" src={Logo} alt="logo" />
          </NavLink>
        </div>
        {/* Mobile Responsive */}
        <div className="absolute right-[2rem] bg-transparent md:hidden">
          <img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[1.5rem] h-[1.5rem] cursor-pointer "
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle && (
            <div className="min-w-[15.875rem]  p-6 px-9 bg-nav h-screen absolute top-15 right-[-3rem]  pt-[4rem] mx-4 my-2 text-white font-Barlow-Condensed font-light tracking-[0.1rem] text-[1rem] ">
              <ul className="grid gap-[3rem] list-none ">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/${link.id}`}
                      className="cursor-pointer flex gap-3"
                    >
                      <span className="font-bold">{link.order}</span>{' '}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Desktop Responsive */}
        <div>
          <ul className="md:flex hidden text-white bg-nav gap-9 font-Barlow-Condensed font-light tracking-[0.1rem] lg:pl-[9rem] md:pl-[4rem] resNav-[1rem] xl:w-[65.875rem] md:w-[40rem] h-[6rem]  items-center uppercase relative">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={`/${link.id}`}
                  className={`cursor-pointer pb-[2.3rem]`}
                >
                  <span className="font-bold">{link.order}</span> {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[40.5625rem] ml-[15rem] bg-white h-[0.0625rem] absolute hidden 2/5xl:block" />
      </div>
    </nav>
  );
};

export default Navbar;
