import Logo from '../assets/images/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Profile from './../assets/profile/profile2.jpeg'

export default function AdminTopNav() {
    return (
        <nav className='w-full flex flex-col justify-between items-center p-10 md:flex-row'>
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="logo" className="w-20 transition-all duration-500 ease-in-out" />
            <h1>Medi Lab Edge</h1>
        </div>

        <div>
            <form className='flex justify-center items-center'>
                <input className='bg-transparent border-2 rounded-lg border-cyan-500 h-10 w-[400px] ps-3 me-4 outline-yellow-500' placeholder='Search' type="text" />
                <button><IoSearchOutline className='text-3xl text-cyan-500' /></button>

            </form>
        </div>

        <div>
            <IoMdHelpCircleOutline className='text-4xl text-cyan-500' />
        </div>
    </nav>
    )

}