
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { UserCircle } from 'phosphor-react'


const Navbar = ({navbarLinks}) => {
    return (
        
            <nav className='flex w-full'>        
                
                <div className='flex w-full h-[70px]  items-center justify-between mx-auto px-8 py-2 font-exo bg-black z-20 '>

                    <div className='text-white'>

                        <p className='select-none'>IRON REBORN</p>

                    </div>

                    <div className='flex'>

                        <ul className='flex gap-8 items-center text-white'>

                            {navbarLinks.map((links, index)=>(
                                <li 
                                key={index}
                                role='link section'>
                                <ScrollLink
                                to = {links.to}
                                smooth = {true}
                                duration = {500}
                                spy = {true}
                                activeClass='text-red-700'
                                className='hover:text-red-700 hover:border-b hover:border-red-700 hover:cursor-pointer'
                                >
                                {links.label}
                                </ScrollLink>
                            </li>

                            ))}
                        
                        </ul>

                        <div
                        className='ml-20'
                        role='link section'>

                            <NavLink
                            to='/'
                            className='flex items-center gap-1  text-white'
                            >
                                Login
                                <UserCircle size={30} color='white'/>
                            </NavLink>

                        </div>

                    </div>

  

                </div>
        
            </nav>
  )
}

export default Navbar
