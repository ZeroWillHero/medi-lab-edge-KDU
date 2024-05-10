import logo from '../assets/images/logo.png'
import { useState, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Profile from './../assets/profile/profile2.jpeg';



export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const hideMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', hideMenu);

        return () => {
            document.removeEventListener('click', hideMenu);
        };
    }, []);

    return (
        <nav className="bg-transparent flex flex-col justify-between items-center w-full pt-10 ps-5 pe-5 md:flex-row transition-all duration-500 ease-in-out">
            <div className='flex justify-center items-center gap-[4vw] mb-4 md:mb-0 transition-all duration-500 ease-in-out'>
                <img src={logo} alt="logo" className="w-20 transition-all duration-500 ease-in-out" />
                <h1 className='font-bold text-cyan-900 transition-all duration-500 ease-in-out'>Medi Lab Edge</h1>
                <div>
                    <button onClick={handleMenu}><FaAlignJustify className='text-3xl text-cyan-900 block md:hidden transition-all duration-500 ease-in-out' /></button>
                </div>
            </div>

            <div className={`flex flex-col gap-[4vw] items-center md:flex-row transition-all duration-500 ease-in-out overflow-hidden ${showMenu ? "h-auto opacity-100" : "h-0 opacity-0 md:h-auto md:opacity-100"}`}>
                <div><a href="#footer" className="transition-all duration-500 ease-in-out">About Us</a></div>
                <div><a href="#" className="transition-all duration-500 ease-in-out">Facilities & Services</a></div>
                <div><a href="#" className="transition-all duration-500 ease-in-out">Career</a></div>
                <div><a href="#" className="transition-all duration-500 ease-in-out">Patients and Visitors</a></div>
                <Link to='/profile' className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer'>
                    <img src={Profile} alt="profile" />
                </Link>
            </div>

            <div className={`flex flex-col gap-[4vw] items-center md:flex-row transition-all duration-500 ease-in-out overflow-hidden ${showMenu ? "h-auto opacity-100" : "h-0 opacity-0 md:h-auto md:opacity-100"}`}>
                <div>

                    <Link to='/login' className='bg-cyan-500 text-white p-4 rounded-md hover:bg-cyan-400'>Login</Link>
                </div>
            </div>
        </nav>
    )
}