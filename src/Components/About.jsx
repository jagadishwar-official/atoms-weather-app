function About() {

    return (
        <section id="about" className="bg-sky-50 px-6 py-16">

            <div className="mx-auto max-w-5xl text-center">

                <h2 className="text-3xl font-bold text-gray-800">
                    About Atoms Weather
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    Atoms Weather is a simple and responsive weather application
                    that helps you quickly check current weather conditions for
                    any city.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Simple
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Search for a city and get weather information quickly.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Real-Time
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Get current weather information using a weather API.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Responsive
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Designed to work smoothly across different screen sizes.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About