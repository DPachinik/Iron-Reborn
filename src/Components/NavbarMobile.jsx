import { List, UserCircle, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const Navbar = () => {

  

    const [menuOpen, setMenuOpen] = useState (false)
    
     function handleMenuOpen(){
      setMenuOpen(true);
     }
    
     function handleMenuClose(){
      setMenuOpen(false);
     }
    
     function handleItemClose(){
      setMenuOpen(false);
     }
    
     useEffect(()=>{
      if(window.innerWidth< 768){
        if(menuOpen){
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = 'auto'
        }
      }
    },[menuOpen]);
    
    
    return (
        
            <nav className='relative w-full'>
    
                <div className=' h-[70px] flex items-center justify-between  px-2 py-2 font-exo bg-black '>

                    <div className=''>
                        {menuOpen?(
                        <X 
                            size={26} 
                            color='white'
                            onClick={handleMenuClose}
                            aria-label='cerrar menú'
                        />
                        ):(
                        <List 
                            size={30} 
                            color='white' 
                            onClick={handleMenuOpen}
                            aria-label='abrir menú'
                        />
                        )
                        }
                    </div>
        
                    <div className='flex items-center text-white text-center ml-8'>
        
                        <p>IRON REBORN</p>
        
                    </div>
        
                    <div className='h-[500px]  absolute top-[70px] left-0 inset-0 '>
        
                        <ul className={` h-full flex flex-col gap-8 py-8 text-red-700 items-center justify-around ${menuOpen?'bg-gradient-to-b from-black via-gray-900 to-fondoFinal':'hidden pointer-events-none'}`} 
                        role='menu'
                        >
        
                        <li className='flex w-full' role='menu Item'
                        >
                            <ScrollLink
                            to = 'Inicio'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            className=' w-full text-center py-4 hover:bg-red-700 hover:text-white duration-300 ease-in-out'
                            onClick={handleItemClose}
                            >
                            Inicio
                            </ScrollLink>
                        </li>
        
                        <li className='flex w-full' role='menu Item'
                        >
                            <ScrollLink
                            to = 'Hero'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            className=' w-full text-center py-4 hover:bg-red-700 hover:text-white duration-300 ease-in-out'
                            onClick={handleItemClose}
                            >
                            Sobre Nosotros
                            </ScrollLink>
                        </li>
        
                        <li className='flex w-full' role='menu Item'
                        >
                            <ScrollLink
                            to = 'Hero'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            className=' w-full text-center py-4 hover:bg-red-700 hover:text-white duration-300 ease-in-out'
                            onClick={handleItemClose}
                            >
                            Clases
                            </ScrollLink>
                        </li>
        
                        <li className='flex w-full' role='menu Item'
                        >
                            <ScrollLink
                            to = 'Hero'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            className=' w-full text-center py-4 hover:bg-red-700 hover:text-white duration-300 ease-in-out'
                            onClick={handleItemClose}
                            >
                            Contacto
                            </ScrollLink>
                        </li>
        
                        </ul>
        
                    </div>
                    
                    <div>
        
                        <NavLink
                            to='/'
                            className='flex text-white items-center gap-2'
                            >
                                Login
                                <UserCircle size={30} color='white'/>
                            
                        </NavLink>
        
                    </div>

                </div>

            </nav>
        
    )
}

export default Navbar
