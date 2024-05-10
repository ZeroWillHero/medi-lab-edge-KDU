import Appointments from "../components/Appoinments";
import Appoint from "../components/Appoint";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Facilitate from "../components/Facilitate";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import News from "../components/News";


export default function Home () {
    return (
        <div className="flex flex-col justify-center items-center">
            <NavBar />

            <div className="container mx-auto flex-col justify-center items-center">
                <Hero />
                <Appoint />
                <Appointments />
                <Facilitate />
                <Client />
                <Contact />
                <News />
            </div>

            <Footer />

          
        </div>
    )
}