import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Weather from "../Components/weather"
import About from "../Components/About"

function Home(){
    return (
        <>
        <Navbar />
        <Hero />
        <Weather />
        <About />
        </>
    )
}

export default Home