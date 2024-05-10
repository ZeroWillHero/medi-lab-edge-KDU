import { MdOutlineDelete, MdOutlineEdit, MdOutlineStar } from "react-icons/md";
export default function DoctorCard(props) {
    return (
        <div className="grid grid-cols-4 gap-3 items-center p-3 shadow-lg">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <img src={props.img} />
            </div>

            <div className="text-gray-500 ">
                <p>name</p>
                <p>Specialist</p>
                <p>Gender</p>
                <p>Time</p>
                <p>Location</p>

            </div>

            <div className="text-black">
                <p>{props.name}</p>
                <p>{props.Specialist}</p>
                <p>{props.Gender}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
            </div>

            <div className="text-cyan-500 text-3xl flex flex-col ">
                <button><MdOutlineDelete /></button>
                <button><MdOutlineEdit /></button>
                <button><MdOutlineStar /></button>

            </div>
        </div>
    )
}