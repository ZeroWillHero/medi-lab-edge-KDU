import Visa from '../assets/images/visa.png';
import Master from './../assets/images/master.png';
export default function Payment() {
    return (
        <form className="pt-20" action="">
            <h1 className="text-center text-teal-900 text-3xl font-bold mb-3">Payment methods</h1>
            <hr />
            <div className="flex justify-center items-center gap-3">
                <div className='flex justify-center items-center '>
                    <input type="radio"  name="paymentMethod" />
                    <div>
                        <img className='h-[100px]' src={Visa} alt="" />
                    </div>
                </div>

                <div className='flex justify-center items-center '>
                    <input type="radio"  name="paymentMethod" />
                    <div>
                        <img className='h-[100px]' src={Master} alt="" />
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center mt-10 gap-5">
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Please Select Your Bank" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Card Number" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="CVC Code" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Expire Date" type="text" />

                <button className="bg-cyan-500 text-white rounded-lg p-2 hover:bg-cyan-300">Save full Details</button>

            </div>

        </form>
    )
}