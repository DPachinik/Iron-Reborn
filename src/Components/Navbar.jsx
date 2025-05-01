import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'


const Navbar = () => {
  return (
    <>
      <div className='flex w-full md:hidden'>
        <NavbarMobile />
      </div>
      <div className='hidden md:flex md:w-full'>
        <NavbarDesktop />
      </div>
  </>
  )
}

export default Navbar





          

