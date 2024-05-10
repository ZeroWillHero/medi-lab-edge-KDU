import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function PatientLogIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError] = useState('');

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        
        });
        const data = await response.json();
        if(response.ok){
            navigate('/');
        }else {
            setError(data.message);
        }
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();       
    }


    return (
        <form className='mt-10' onSubmit={handleSubmit}>
            <h1 className='text-cyan-500 font-semibold text-center text-2xl'>Sign in your Account</h1>
            <p className='text-center text-gray-500 mb-10'>Log in to your  account and we will get you in to see your doctors</p>

            <label className='mb-4' htmlFor="Email">Email Address</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="text" onChange={handleEmail} />

            <label className='mb-4' htmlFor="Email">Password</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="password" onChange={handlePassword} />
            <button className='bg-cyan-500 p-2 w-32 text-white font-semibold rounded-md mt-2 hover:bg-cyan-400'>Sign In</button>

            {error && <p className='text-red-500'>{error}</p>}
            

            <p className='text-gray-400 mt-8'>Don’t Have an Account? <Link to='/signup' className='font-bold'>sign Up</Link></p>
        </form>
    )
}