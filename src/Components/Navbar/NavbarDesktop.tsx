import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { UserCircle } from 'phosphor-react';

type NavbarLinksType = {
  label: string;
  to: string;
};

type NavbarProps = {
  navbarLinks: NavbarLinksType[];
};

const Navbar = ({ navbarLinks }: NavbarProps) => {
  return (
    <nav className="flex w-full">
      <div className="z-20 mx-auto flex h-[70px] w-full items-center justify-between bg-[#3A3A3A] px-8 py-2 font-exo">
        <div className="text-white">
          <p className="select-none">IRON REBORN</p>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-8 text-white">
            {navbarLinks.map((links, index) => (
              <li key={index} role="link section">
                <ScrollLink
                  to={links.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-700"
                  className="hover:cursor-pointer hover:border-b hover:border-red-500 hover:text-red-500"
                >
                  {links.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="ml-20" role="link section">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              Login
              <UserCircle size={30} color="white" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
