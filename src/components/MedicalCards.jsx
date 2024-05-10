import doctors from './../assets/images/doctors.jpeg';
import operation from './../assets/images/operation.png';
export default function MedicalCards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 items-center'>
            <div>
                <img src={doctors} alt='doctors' className='w-full h-full rounded-lg' />
            </div>

            <div className='p-5'>
                <h1 className='font-bold text-2xl mb-8'>Connect with a doctor <br /> anytime & anywhere</h1>
                <p className='mb-3'>Access medical advice and consultations from experienced doctors wherever you are, ensuring timely and convenient healthcare support tailored to your needs.Our platform allows you to discuss your health concerns  </p>
                <button className="bg-cyan-500 text-white p-2 rounded-md font-bold hover:bg-cyan-400">Learn more</button>
            </div>


            <div className='p-5'>
                <h1 className='font-bold text-2xl mb-8'>Quality health starts with<br /> Quality Doctors - Trust the <br />Experts!</h1>
                <p className='mb-3'>Quality health starts with quality doctors. Our team of experts is dedicated to providing comprehensive care and personalized attention, ensuring your well-being is in good hands.   </p>
                <button className="bg-cyan-500 text-white p-2 rounded-md font-bold hover:bg-cyan-400">Learn more</button>
            </div>

            <div>
                <img src={operation} alt='doctors' className='w-full h-full rounded-lg' />
            </div>
        </div>


    )
}