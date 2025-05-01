
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { UserCircle } from 'phosphor-react'


const Navbar = () => {
    return (
        
            <nav className='flex w-full'>        
                
                <div className='flex w-full h-[70px]  items-center justify-between mx-auto px-8 py-2 font-exo bg-black z-20 '>

                    <div className='text-white'>

                        <p className='select-none'>IRON REBORN</p>

                    </div>

                    <ul className='flex gap-8 items-center text-white'>

                        <li role='link section'>
                            <ScrollLink
                            to = 'Inicio'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            activeClass='text-red-700'
                            className='hover:text-red-700 hover:border-b hover:border-red-700 hover:cursor-pointer'
                            >
                            Inicio
                            </ScrollLink>
                        </li>

                        <li role='link section'>
                            <ScrollLink
                            to = ''
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            activeClass='text-red-700'
                            className='hover:text-red-700 hover:border-b hover:border-red-700 hover:cursor-pointer'
                            >
                            Sobre Nosotros
                            </ScrollLink>
                        </li>

                        <li role='link section'>
                            <ScrollLink
                            to = ''
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            activeClass='text-red-700'
                            className='hover:text-red-700 hover:border-b hover:border-red-700 hover:cursor-pointer'
                            >
                            Clases
                            </ScrollLink>
                        </li>

                        <li role='link section'>
                            <ScrollLink
                            to = ''
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            activeClass='text-red-700'
                            className='hover:text-red-700 hover:border-b hover:border-red-700 hover:cursor-pointer'
                            >
                            Contacto
                            </ScrollLink>
                        </li>

                        <li role='link section'>

                            <NavLink
                            to='/'
                            className='flex items-center gap-1 ml-8'
                            >
                            Login
                            <UserCircle size={30} color='white'/>
                            </NavLink>

                        </li>
                    </ul>

                </div>
        
            </nav>
  )
}

export default Navbar
