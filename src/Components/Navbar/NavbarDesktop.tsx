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
    <nav className="fixed left-0 top-0 z-50 flex w-full border-b border-[#ff2323]">
      <div className="z-20 mx-auto flex h-[70px] w-full items-center justify-between bg-[#121212] px-8 py-2 font-exo">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <img src="/r.png" alt="logotipo" className="h-[50px] w-[40px]" />
          <span className="text-center">IRON REBORN</span>
        </a>

        <div className="flex gap-6">
          <ul className="flex items-center gap-3 text-center text-white">
            {navbarLinks.map((links, index) => (
              <li key={index} role="link section" className="">
                <ScrollLink
                  to={links.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  activeClass="text-[#ff2323] border-b border-[#ff2323]"
                  className="select-none hover:cursor-pointer hover:border-b hover:border-[#ff2323] hover:text-[#ff2323]"
                >
                  {links.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="flex" role="link section">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              <UserCircle size={30} color="white" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
