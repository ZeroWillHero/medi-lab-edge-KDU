

export default function DropDown({ icon, title,data }) {
    return (
        <div className="flex justify-center min-w-[250px] h-20 rounded-md bg-white m-4">
            <div className="grid grid-cols-2 gap-[2vw] w-8/12 items-center justify-center">
                <div className="">
                    <div className="text-cyan-500 text-2xl">{icon}</div>
                    <h1 className="text-cyan-500 text-sm font-semibold">{title}</h1>
                </div>

                <div className="w-full">

                    <select className="w-full outline-none h-10 text-cyan-500 text-sm font-bold" name="hospital" id="hospital">
                        <option className='bg-white text-black' value={title}>{title}</option>
                        {data.map((item,index) => (
                            <option className='bg-white text-black hover:bg-cyan-400' key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}