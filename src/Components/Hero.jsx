import cloud from "../assets/images/cloud.png"

const Hero = () => {
    return (
        <>
            <section className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
                 style={{ backgroundImage: `url(${cloud})` }}>


                <div className="text-center text-white max-w-3xl">

                    <p className="mb-4 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                        ☁️ Welcome to Atoms
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Weather Made Simple
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-white/90">
                        Search any city, get real-time weather updates,
                        explore locations and more.
                    </p>

                    <button type="button" onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth"
                        })
                    }}
                        className="rounded-full bg-white px-8 py-4 font-semibold text-sky-600 shadow-lg transition hover:scale-105">
                        Explore Weather
                    </button>

                </div>
            </section>

        </>
    )
}

export default Hero