import DropDown from "./DropDown";
import { FaHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaArrowUpRightDots } from "react-icons/fa6";
import {location,doctor,specialist} from './Data';
import Search from "./Search";



export default function Appoint() {
    return (
        <div className="w-full h-auto min-h-3 bg-cyan-500 pb-4 rounded-md">
            <h1 className="text-white text-2xl pt-4 font-semibold text-center">Connect Doctor’s Schedule</h1>

            <form className="grid grid-cols-1 gap-[4vw] md:grid-cols-4 items-center">
                <DropDown
                    icon={<FaHospital />}
                    title='Hospital'
                    data={location}
                />

                <DropDown
                    icon={<FaArrowUpRightDots />}
                    title='Specialist'
                    data={specialist}
                />

                <DropDown
                    icon={<FaUserDoctor />}
                    title='Doctor'
                    data={doctor}
                />

                <Search />

                



            </form>
        </div>
    )
}