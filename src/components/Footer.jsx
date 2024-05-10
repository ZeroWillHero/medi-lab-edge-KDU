import logo from '../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='bg-zinc-800 w-full mt-4 p-10 pb-20'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
                <div>

                    <div className='flex items-center'>
                        <img src={logo} alt="logo" className="w-20 transition-all duration-500 ease-in-out" />
                        <h1 className='font-bold text-white transition-all duration-500 ease-in-out'>Medi Lab Edge</h1>
                    </div>

                    <p className='text-white'>Empowering healthcare with Medi Lab Edge – your premier partner in modern laboratory management solutions.</p>

                    <div className='flex items-center gap-3 mt-3 mb-3'>
                        <a href="#"><FaGithub className='text-5xl text-cyan-500' /></a>
                        <a href="#"><FaFacebook className='text-5xl text-cyan-500' /></a>
                        <a href="#"><FaInstagram className='text-5xl text-cyan-500' /></a>
                        <a href="#"><FaLinkedin className='text-5xl text-cyan-500' /></a>
                        <a href="#"><FaStackOverflow className='text-5xl text-cyan-500' /></a>
                    </div>


                </div>

                <div className='text-white '>
                    <h1 className='text-xl font-bold mb-10'>Contacts</h1>
                    <p>
                        Medi Lab Edge, <br />
                        23 Main Street,Colombo, <br />
                        info@medilabtech.com <br />
                        Phone | +9411 125 123 254
                    </p>
                </div>

                <div className='text-white'>
                    <h1 className='text-xl font-bold mb-10'>Links</h1>
                    <div className='flex flex-col justify-center'>
                        <a className='mb-3' href="#">Facilitate & Services</a>
                        <a className='mb-3' href="#">Carrier</a>
                        <a className='mb-3' href="#">Patient & Services</a>
                        <a className='mb-3' href="#">Other infomation</a>
                    </div>

                </div>

                <div className='text-white '>
                    <h1 className='text-xl font-bold mb-10'>News Letter</h1>
                    <form className='flex flex-col'>
                        <input className="bg-white outline-none w-56 h-10 rounded-md mb-3 text-black ps-2" type="text" />
                        <button className='bg-cyan-500 ps-2 pe-2 outline-none pt-2 pb-2 rounded-md hover:bg-cyan-400 w-32'>Submit</button>
                    </form>

                </div>


            </div>

            <p className='text-center mt-5 text-white text-xs' id="footer">&#169; 2024 medilabtech Group | All rights Reserved</p>

        </div>
    )
}