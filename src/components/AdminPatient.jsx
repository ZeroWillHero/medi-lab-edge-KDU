import PatientCard from "./PatientCard";
import propic from './../assets/profile/profile2.jpeg';

export default function AdminPatient() {
    return (
        <div className=" w-full min-h-[300px] grid grid-cols-1 gap-2 rounded-lg">
            <PatientCard
                image={propic}
                name="John Doe"
                phone="1234567890"
                id="123456"
                gender="male"
                date="12/12/2021"

            />

            <PatientCard
                image={propic}
                name="John Doe"
                phone="1234567890"
                id="123456"
                gender="male"
                date="12/12/2021"

            />

            <PatientCard
                image={propic}
                name="John Doe"
                phone="1234567890"
                id="123456"
                gender="male"
                date="12/12/2021"

            />
        </div>
    )
}