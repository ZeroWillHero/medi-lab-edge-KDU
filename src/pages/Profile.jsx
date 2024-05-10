import NavBar from "../components/NavBar";
import Profile_pic from "../assets/profile/profile2.jpeg";
import { useState } from "react";
import Personal from "../components/personal";
import Billing from "../components/Billing";
import Payment from "../components/Payment";
import Password from "../components/Password";


export default function Profile() {
    const [fileName, setFileName] = useState('Upload your photo here');
    const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
    }

    // change profile navbar

    const [navOpt,setNavOpt] = useState('personal');

    let content = "";

    switch(navOpt){
        case 'personal':
            content =  <Personal />
            break;

        case 'billing':
            content = <Billing />
            break;

        case 'payment' :
            content = <Payment />
            break;

        case 'password':
            content = <Password />
            break;
        
    }


    return (
        <div>
            <NavBar />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 container mx-auto mt-5">
                <div className="bg-cyan-500 h-auto min-h-[40vw] w-[40vw] rounded-md">
                    <div className="flex justify-center items-center gap-5 p-5">
                        <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
                            <img src={Profile_pic} alt="" />
                        </div>

                        <form>
                            <p className="text-white text-sm">{fileName}</p>
                            <input type="file" className="hidden" id="image" onChange={handleFileChange} />
                            {fileName !== 'Upload your photo here' ? <button className="bg-cyan-800 rounded-md p-2 hover:bg-teal-700 text-white">upload</button> : ''}
                        </form>

                        <div>
                            {fileName === 'Upload your photo here' ?<button className="bg-cyan-800 rounded-md p-2 hover:bg-teal-700 text-white"
                                onClick={() => {
                                    document.querySelector('#image').click()
                                }}>
                                Browse

                            </button> : ''}

                        </div>
                    </div>

                    <div className="grid grid-rows-4 gap-4 ms-20 me-0 justify-end">
                        <button className={navOpt === "personal" ? "bg-white text-black font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out" : "bg-teal-900 text-white font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out"} onClick={() => {setNavOpt('personal')}}>Personal Details</button>
                        <button className={navOpt === "billing" ? "bg-white text-black font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out" : "bg-teal-900 text-white font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out"} onClick={() => {setNavOpt('billing')}}>Billing Address</button>
                        <button className={navOpt === "payment" ? "bg-white text-black font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out" : "bg-teal-900 text-white font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out"} onClick={() => {setNavOpt('payment')}}>Payment Methods</button>
                        <button className={navOpt === "password" ? "bg-white text-black font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out" : "bg-teal-900 text-white font-bold p-4 rounded-s-md transition-all duration-500 ease-in-out"} onClick={() => {setNavOpt('password')}}>Change Password</button>

                    </div>
                </div>

                <div className="bg-white h-auto min-h-[40vw] w-[40vw] rounded-md">
                    <div className="h-full bg-white">
                        {content}
                    </div>
                </div>
            </div>
        </div>

    )
}