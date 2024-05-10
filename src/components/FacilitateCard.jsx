import Sergery from '../assets/images/operation.png';
import Dental from '../assets/images/dental.jpeg';
export default function FacilitateCard () {
    return (
        <div className="grid grid-cols-2 items-center gap-0 bg-white rounded-md shdow-lg shadow-cyan-500">
            <div>
                <img src={Dental} alt="Sergery" className="w-96" />
            </div>

            <div className='p-5'>
                <h1 className='font-bold text-2xl mb-8'>Dental Specialist Clinic</h1>
                <p className='mb-3'>Our medical check-up services offer a thorough assessment of your health, providing valuable insights and peace of mind. </p>
                <button className="bg-cyan-500 text-white p-2 rounded-md font-bold hover:bg-cyan-400">Learn more</button>
            </div>
        </div>
    )
}