import DoctorCard from "./DoctorCard";
import proPic from "./../assets/profile/profile2.jpeg";

export default function Admindoc() {
    return (
        <div>
            <div className="bg-white w-full min-h-[300px] grid grid-cols-1 gap-2 rounded-lg">
               
                    <DoctorCard
                    
                     img={proPic}
                     name="Dr. John Doe"
                        Specialist="Dentist"
                        gender='male'
                        time='10:00am - 12:00pm'
                        location='Dhaka'
                    
                    />

<DoctorCard
                    
                    img={proPic}
                    name="Dr. John Doe"
                       Specialist="Dentist"
                       gender='male'
                       time='10:00am - 12:00pm'
                       location='Dhaka'
                   
                   />
                
            </div>
        </div>
    )
}