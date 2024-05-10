import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";

export default function Router () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/admin' element={<Admin />} />

            </Routes>
        </BrowserRouter>
    )
}