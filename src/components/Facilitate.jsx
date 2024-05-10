import FacilitateCard from "./FacilitateCard";
import MedicalCards from "./MedicalCards";

export default function Facilitate() {
    return (
        <div className="pb-10">
            <h1 className="font-bold text-3xl text-center p-10">Facilitate and Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="font-bold mb-5">Medical Checkup</h1>
                    <p className="h-auto text-white p-2 w-auto bg-gradient-to-r from-cyan-500 to-white">Dental Specialist Clinic</p>
                </div>

                <div>
                    <FacilitateCard />
                </div>
            </div>


            <div>
                <MedicalCards />
            </div>
        </div>
    )
}