import hospital from '../assets/images/hospital.png';
export default function Contact() {
    return (
        <div className="mt-20 flex justify-center items-center relative">
            <div className='absolute w-full h-[500px] bg-cyan-900 opacity-100 z-0'></div>
            <img className="w-full h-[500px] object-cover z-20 opacity-50" src={hospital} alt="hospital.jpg" />
            <div className="absolute z-30 flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-2xl text-center">Trust We support to be your partner <br /> in health and wellness.</h1>
                <p className="text-white text-center">Trust We support you to be your partner <br /> in health and wellness, providing <br /> comprehensive care and personalized solutions.</p>
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded">Contact Us</button>
            </div>
        </div>
    )
}