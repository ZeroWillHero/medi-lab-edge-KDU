import { MdOutlineDelete } from "react-icons/md";

export default function PatientCard (props) {
    return (
        <div className=" h-fit w-full grid grid-cols-8 p-3 shadow-lg items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden"> 
                <img src={props.image} alt="" />
            </div>

            <div className="text-black">
                <h1>{props.name}</h1>
            </div>

            <div className="text-black">
                <p>{props.phone}</p>
            </div>

            <div className="text-black">
                <p>{props.id}</p>
            </div>

            <div className="text-black">
                <p>{props.gender}</p>
            </div>

            <div className="text-black">
                <p>{props.date}</p>
            </div>

            <div className="text-2xl text-cyan-500">
                <button><MdOutlineDelete /></button>
            </div>
        </div>
    )
}