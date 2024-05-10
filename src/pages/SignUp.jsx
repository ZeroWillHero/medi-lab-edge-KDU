
import Wave from './../assets/images/Wave.png';
import { FaRegUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import PatientLogIn from '../components/PatientLogIn';
import { useState } from 'react';
import PatientSignUp from '../components/Patientsignup';

export default function SignUp() {
    const [userType, setUserType] = useState('user');

    function handleUserType(type) {
        setUserType(type);
    }
    return (
        <div className="flex items-center justify-center pt-[10vh]">


            <div className="bg-white w-[80vw] h-auto mx-auto min-h-[400px] rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">

                <div className='flex flex-col justify-center items-center p-5 transition-all'>
                    <div className='flex justify-center items-center gap-10'>
                        <div className='cursor-pointer' onClick={() => handleUserType('user')}>
                            <div className='bg-cyan-500 h-[50px] w-full rounded-full flex justify-center items-center '>
                                <FaRegUser className={userType === 'user' ? 'text-cyan-900' : 'text-white'} />
                            </div>
                            <h1 className='text-gray-500'>Patient</h1>
                            <div className={userType === 'user' ? 'bg-cyan-500 h-1 w-14 rounded-full' : 'hidden'}></div>

                        </div>


                        <div className='cursor-pointer' onClick={() => handleUserType('admin')}>
                            <div className='bg-cyan-500 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                                <FaGear className={userType === 'admin' ? 'text-cyan-900' : 'text-white'} />
                            </div>
                            <h1 className='text-gray-500'>Admin</h1>
                            <div className={userType === 'admin' ? 'bg-cyan-500 h-1 w-14 rounded-full' : 'hidden'}></div>

                        </div>

                    </div>

                    <PatientSignUp />
                </div>

                <div className="bg-cyan-300 w-[30vw] text-white hidden justify-center items-center md:flex-col md:flex">
                    <h1 className="text-xl text-center font-semibold mt-40">Expert advice from<br /> top doctors</h1>
                    <ul className="mt-10 list-inside list-disc">
                        <li className="mb-2 ">Expert advice from top doctors</li>
                        <li className="mb-2 ">Available 24/7 on any device</li>
                        <li className="mb-2 ">Expert advice from top doctors</li>
                        <li className="mb-2 ">Expert advice from top doctors</li>


                    </ul>
                    <img className="relative bottom-0" src={Wave} />

                </div>

            </div>


        </div>
    )
}