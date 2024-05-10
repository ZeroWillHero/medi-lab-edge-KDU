export default function ClientExp () {
    return (
        <form className="grid grid-rows-7 gap-1 items-center">
            <label className="text-cyan-500 font-bold text-xl" htmlFor="name">name</label>
            <input className="h-10 ps-2 " type="text" placeholder="Name" />

            <label className="text-cyan-500 font-bold text-xl" htmlFor="position">position</label>
            <input className="h-10 ps-2 " type="text" placeholder="position" />

            <label className="text-cyan-500 font-bold text-xl" htmlFor="discription">Discription</label>
            <input className="h-20 w-auto ps-2" type="text" placeholder="discription" />

            <button className="bg-cyan-500 hover:bg-cyan-400 p-3 rounded-md">Upload</button>
        </form>
    )
}