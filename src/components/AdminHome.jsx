import { useState } from "react";

export default function AdminHome() {
    return (
        <div className="flex items-center justify-center gap-5 m-5">
            <div className="grid grid-rows-2 ">
                <div className="bg-cyan-300 w-[800px] min-h-[20px] p-5 rounded-2xl mt-20">
                    <h1 className="text-2xl text-cyan-800">Welcome Mashi</h1>
                    <p className="text-cyan-800 mb-10">Welcome, Admin! Streamline your lab operations with Medi Lab Edge's intuitive dashboard and powerful management tools</p>
                    <button className="bg-cyan-500 p-2 rounded-xl">Profile</button>
                </div>

                <div className="grid grid-cols-2 gap-5 items-center justify-center m-3">
                    <div className="bg-cyan-300 p-10 rounded-lg">
                        <h1 className="text-2xl text-cyan-800">Appointments</h1>
                        <h1 className="text-4xl text-teal-900">512</h1>
                        <p className="text-cyan-800">Total Online Appointments Today</p>
                        <button className="bg-cyan-500 mt-10 p-2 rounded-xl">View more</button>
                    </div>

                    <div className="bg-yellow-300 p-10 rounded-lg" >
                        <h1 className="text-2xl text-cyan-800 ">patients</h1>
                        <h1 className="text-4xl text-teal-900">512</h1>
                        <p className="text-cyan-800">Total Online Appointments Today</p>
                        <button className="bg-cyan-500 mt-10 p-2 rounded-xl">View more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}