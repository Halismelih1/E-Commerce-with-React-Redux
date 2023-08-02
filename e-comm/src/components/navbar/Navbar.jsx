import React from 'react';
import NavbarLeft from './navbarİtems/NavbarLeft';
import NavbarRight from './navbarİtems/NavbarRight';

const Navbar = () => {
  return (
    <nav className='flex flex-wrap md:flex-nowrap items-center justify-between p-4 '>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
}

export default Navbar;
