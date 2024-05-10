import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function PatientSignUp() {

    
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError] = useState('');
   

    const navigate = useNavigate();


    const handleName = (e) => {
        setFullName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMobile = (e) => {
        setMobile(e.target.value);
    }

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const fetchData = async () => {
        if(password !== confirmPassword){
            setError('passwords do not match');
            return;
        }else{
            const response = await fetch('http://localhost:3000/user/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullname:fullname,email: email, password: password,mobile: mobile,})
        
        });
        const data = await response.json();
        if(response.ok){
            navigate('/login');
        }else {
            setError(data.message);
        }
        console.log(data);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault(),
        
        fetchData()
        

}

    return (
        <form className='mt-10 pe-20 ps-20' onSubmit={handleSubmit}>
            <h1 className='text-cyan-500 font-semibold text-center text-2xl'>Sign up</h1>
            <p className='text-center text-gray-500 mb-10'>Log in to your  account and we will get you in to see your doctors</p>

            <label htmlFor="name">Name</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="text" required onChange={handleName} />

            <label className='mb-4' htmlFor="Email">Email Address</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="email" required onChange={handleEmail} />

            <label htmlFor="mobile">mobile number</label>
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="text" required onChange={handleMobile} />

            <label className='mb-4' htmlFor="password">Enter Password</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="password" required onChange={handlepassword} />

            <label className='mb-4' htmlFor="confirm password">confirm Password</label><br />
            <input className='h-10 w-full rounded-md bg-transparent border-2 border-cyan-500 outline-2 outline-orange-500 p-2' type="password" required onChange={handleConfirmPassword} />

            <button className='bg-cyan-500 p-2 w-32 text-white font-semibold rounded-md mt-2 hover:bg-cyan-400'>Sign In</button>

            {error && <p className='text-red-500'>{error}</p>}

            <p className='text-gray-400 mt-8'>Already Have an Account? <Link to='/login' className='font-bold'>Log in</Link></p>
        </form>
    )
}