import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TbMenu } from 'react-icons/tb';
import SideBarMenu from './SideBarMenu';

function SideBar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  const closeMobile = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  return (
    <>
      <section className="md:w-auto z-10">
        <div className="Sidemenu">
          <button className="humbergur z-10 mt-3 ml-3 bg-transparent" type="button">
            {navbarOpen ? <TbMenu className="open" onClick={() => handleNavbarToggle()} />
              : <MdClose className="close" onClick={() => handleNavbarToggle()} />}
          </button>
          <div>
            { !navbarOpen && <SideBarMenu closeMobile={closeMobile} /> }
          </div>
        </div>
        <div className="desk">
          <SideBarMenu />
        </div>
      </section>
    </>
  );
}

export default SideBar;
