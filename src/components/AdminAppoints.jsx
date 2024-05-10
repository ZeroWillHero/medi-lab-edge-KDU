import Profile from './../assets/profile/profile2.jpeg'
import { useState } from 'react';
export default function AdminAppoint() {
    const [appoints, setAppoints] = useState(false);
    
    const handleSetappoint = () => {
        setAppoints(!appoints);
    }
    return (
        <div>
            <h1 className="text-cyan-500 text-2xl ms-5">Appoinments</h1>
            <div className="grid grid-cols-1 w-full mt-2">
                <div className='shadow-lg p-3 flex justify-between items-center'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={Profile} alt="profile" />
                    </div>

                    <h1 className='text-black font-bold'>Chameera sandakelum</h1>
                    <p className='text-black'>0764251024</p>
                    <p className='text-black'>Chameerasandakelum@gmail.com</p>
                    <p className='text-black'>2100212</p>
                    <p className='text-black'>21/02/2024</p>
                    <button className='bg-cyan-500 p-2 rounded-lg' onClick={handleSetappoint}>{appoints ? "&#x2713; ": 'confirm'}</button>

                    {/* show true mark for if it is done instead confirm keyword */}



                </div>
                <div className='shadow-lg p-3 flex justify-between items-center'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={Profile} alt="profile" />
                    </div>

                    <h1 className='text-black font-bold'>Chameera sandakelum</h1>
                    <p className='text-black'>0764251024</p>
                    <p className='text-black'>Chameerasandakelum@gmail.com</p>
                    <p className='text-black'>2100212</p>
                    <p className='text-black'>21/02/2024</p>
                    <button className='bg-cyan-500 p-2 rounded-lg'>confirm</button>

                    {/* show true mark for if it is done instead confirm keyword */}



                </div>

                <div className='shadow-lg p-3 flex justify-between items-center'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={Profile} alt="profile" />
                    </div>

                    <h1 className='text-black font-bold'>Chameera sandakelum</h1>
                    <p className='text-black'>0764251024</p>
                    <p className='text-black'>Chameerasandakelum@gmail.com</p>
                    <p className='text-black'>2100212</p>
                    <p className='text-black'>21/02/2024</p>
                    <button className='bg-cyan-500 p-2 rounded-lg'>confirm</button>

                    {/* show true mark for if it is done instead confirm keyword */}



                </div>
            </div>
        </div>
    )
}