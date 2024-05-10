import Hero_imag from '../assets/images/hero.png';
export default function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[4vw] min-h-fit mt-20'>
            <div>
                <h1 className='text-5xl font-bold text-cyan-900 p-2 ms-3'>Empowering <span className='text-cyan-500'>Health
                </span> <br />
                and wellness</h1>

                <p className='ms-3 p-4 text-xl'>Track your lab tests easily. Get results online. Manage appointments and payments conveniently. </p>
            </div>

            <div className='w-[400px] h-[400px] rounded-full bg-gradient-to-b from-cyan-500 to-white md:block hidden'>
                <img  src={Hero_imag} alt='hero' />
            </div>
        </div>
    )
}