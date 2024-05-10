import Profile from './../assets/profile/profile2.jpeg'
import AdminTopNav from '../components/AdminTopNav';
import AdminHome from '../components/AdminHome';
import { useState } from 'react';
import AdminAppoint from '../components/AdminAppoints';
import AdminPatient from '../components/AdminPatient';
import Admindoc from '../components/Admindoc';
import AdminUpload from '../components/AdminUpload';

export default function Admin() {
    // change navBar 
    const [navOpt,setNavOpt] = useState('home');

    const handleNavopt = (opt) => [
        setNavOpt(opt)
    ]
    let content = "";

    switch(navOpt){
        case 'home':
            content = <AdminHome />
            break;

        case 'appoinments' :
            content = <AdminAppoint />
            break;

        case 'patient' : 
            content = <AdminPatient />
            break;

        case 'doctor' :
            content = <Admindoc />
            break;

        case 'upload' :
            content = <AdminUpload />
            break;

        case 'logout' :
            break;
    }

    return (
       <div className='container mx-auto h-screen'>
            <AdminTopNav />

            <div className='flex h-[80vh] text-white' >
                <div className=' bg-cyan-500 m-0 rounded-e-xl w-2/12 p-10 pb-10'>
                    <ul className='flex flex-col justify-center items-center gap-[2vw] mt-10 font-bold'> 
                        <li><button onClick={() => handleNavopt('home')}>Home</button></li>
                        <li><button onClick={() => handleNavopt('appoinments')}>Appoinments</button></li>
                        <li><button onClick={() => handleNavopt('doctor')}>Doctors</button></li>
                        <li><button onClick={() => handleNavopt('patient')}>Patients</button></li>
                        <li><button onClick={() => handleNavopt('upload')}>Uploads</button></li>
                        <li><button onClick={() => handleNavopt('logout')}>Log out</button></li>
                        <li className='flex justify-center items-center gap-2 mt-10'>
                            <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <img className='' src={Profile} alt="" />
                            </div>

                            <h1 className='font-bold text-sm'>Chameera sandakelum</h1>
                        </li>

                    </ul>
                </div>

                <div className=' w-10/12'>
                    {content}
                </div>

                
            </div>
       </div>
    )
}