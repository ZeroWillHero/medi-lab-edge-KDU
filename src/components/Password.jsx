export default function Password () {
    return (
        <form className="pt-20" action="">
            <h1 className="text-center text-teal-900 text-3xl font-bold mb-3">Change Password</h1>
            <hr />
            <div className="flex flex-col justify-center items-center mt-10 gap-5">
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Current Password" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="new Password" type="text" />
                <input className="bg-transparent border-2 h-10 rounded-lg border-gray-500 w-[20vw] ps-5" placeholder="Confirm password" type="text" />
                
                <button className="bg-cyan-500 text-white rounded-lg p-2 hover:bg-cyan-300">Save full Details</button>

            </div>

        </form>
    )
}