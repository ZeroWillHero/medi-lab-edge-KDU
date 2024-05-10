export default function Billing() {
    return (
        <div>
            <form className="pt-20" action="">
            <h1 className="text-center text-teal-900 text-3xl font-bold mb-3">Billing address</h1>
            <hr />
            <div className="flex flex-col justify-center items-center mt-10 gap-5">
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="please select your country" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Postal Code" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Address Line 1" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Address Line 1" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Mobile number" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="State" type="text" />

                <button className="bg-cyan-500 text-white rounded-lg p-2 hover:bg-cyan-300">Save full Details</button>

            </div>

        </form>
        </div>
    )
}