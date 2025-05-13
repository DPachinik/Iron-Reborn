import { List, UserCircle, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

type NavbarLinksType = {
  label: string;
  to: string;
};

type NavbarProps = {
  navbarLinks: NavbarLinksType[];
};

const Navbar = ({ navbarLinks }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleItemClose() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [menuOpen]);

  return (
    <nav className="relative z-20 w-full">
      <div className="flex h-[70px] items-center justify-between bg-black px-2 py-2 font-exo">
        <div className="">
          {menuOpen ? (
            <X
              size={26}
              color="white"
              onClick={handleMenuClose}
              aria-label="cerrar menú"
            />
          ) : (
            <List
              size={30}
              color="white"
              onClick={handleMenuOpen}
              aria-label="abrir menú"
            />
          )}
        </div>

        <div className="ml-8 flex items-center text-center text-white">
          <p>IRON REBORN</p>
        </div>

        <div className="absolute inset-0 left-0 top-[70px] h-[500px]">
          <ul
            className={`flex h-full flex-col items-center justify-around gap-8 py-8 text-red-700 ${menuOpen ? 'bg-gradient-to-b from-black via-gray-900 to-fondoFinal' : 'pointer-events-none hidden'}`}
            role="menu"
          >
            {navbarLinks.map((links, index) => (
              <li key={index} className="flex w-full" role="menu Item">
                <ScrollLink
                  to={links.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="w-full py-4 text-center duration-300 ease-in-out hover:bg-red-700 hover:text-white"
                  onClick={handleItemClose}
                >
                  {links.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <NavLink to="/" className="flex items-center gap-2 text-white">
            Login
            <UserCircle size={30} color="white" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
