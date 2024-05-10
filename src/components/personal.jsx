export default function Personal() {
    return (
        <form className="pt-20" action="">
            <h1 className="text-center text-teal-900 text-3xl font-bold mb-3">Personal Details</h1>
            <hr />
            <div className="flex flex-col justify-center items-center mt-10 gap-5">
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="firstname" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="lastname" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Age" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Gender" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Mobile Number" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Address" type="text" />

                <button className="bg-cyan-500 text-white rounded-lg p-2 hover:bg-cyan-300">Save full Details</button>

            </div>

        </form>
    )
}