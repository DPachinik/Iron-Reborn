import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';
import { navbarLinks } from '../../Data/navbarLinks';

const Navbar = () => {
  return (
    <>
      <div className="flex w-full md:hidden">
        <NavbarMobile navbarLinks={navbarLinks} />
      </div>
      <div className="hidden md:flex md:w-full">
        <NavbarDesktop navbarLinks={navbarLinks} />
      </div>
    </>
  );
};

export default Navbar;
