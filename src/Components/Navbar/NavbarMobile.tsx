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

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleItemClose = () => setMenuOpen(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }
  }, [menuOpen]);

  return (
    <nav className="border-b-px fixed left-0 top-0 z-50 w-full border-[#ff2323]">
      <div className="flex h-[70px] items-center justify-between bg-[#121212] px-4 py-2 font-exo">
        <div>
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <UserCircle size={30} color="white" />
          </NavLink>
        </div>

        <div className="ml-8 flex items-center text-center text-white">
          <p>IRON REBORN</p>
        </div>

        {/* Menú desplegable */}
        <div
          className={`absolute left-0 top-[70px] w-full border-b-2 border-[#ff2323] transition-all duration-300 ${
            menuOpen
              ? 'z-40 h-[500px]'
              : 'pointer-events-none z-0 h-0 overflow-hidden'
          }`}
        >
          <ul
            className={`flex h-full flex-col items-center justify-around gap-8 py-8 text-white ${
              menuOpen ? 'bg-[#121212] transition-all duration-1000' : 'hidden'
            }`}
            role="menu"
          >
            {navbarLinks.map((links, index) => (
              <li
                key={index}
                className="flex w-full items-center hover:border-b hover:border-[#ff2323]"
                role="menuitem"
              >
                <ScrollLink
                  to={links.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="w-full py-4 text-center duration-300 ease-in-out hover:text-[#ff2323]"
                  onClick={handleItemClose}
                >
                  {links.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 top-[70px] z-30 bg-white/40 opacity-50"
            onClick={handleMenuClose}
          />
        )}

        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
