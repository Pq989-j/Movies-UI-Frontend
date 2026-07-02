import { NavLink } from "react-router-dom"

function Home () {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto flex flex-col-reverse items-center justify-between px-6 py-20 md:flex-row">
      
                <div className="max-w-xl text-center md:text-left">


                    <h1 className="mb-6 text-5xl font-extrabold ">
                        🎥 Los clasicos del cine, 
                        <span className="text-red-500"> en un solo lugar</span>
                    </h1>

                    <p className="mb-8 text-lg text-white">
                        Explora los últimos estrenos, clásicos inolvidables y encuentra
                        recomendaciones personalizadas para disfrutar de la mejor experiencia
                        cinematográfica.
                    </p>

                    <div className="gap-4 w-60">
                        
                        <NavLink to="/movies" className="rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">
                            Explorar catálogo
                        </NavLink>
                    </div>
                </div>

                {/* Imagen */}
                <div className="mb-10 md:mb-0">
                    <img
                    src="https://media.istockphoto.com/id/1500477334/es/foto/interiores-de-c%C3%B3modas-sillas-de-cine-rojas-vac%C3%ADas-discreto-tono-oscuro.jpg?s=612x612&w=0&k=20&c=ABiQj1q_I64smVkRTCiPcWLpXalKcPFbP_Uwb7M1Hto="
                    alt="Películas"
                    className="w-full max-w-md rounded-2xl shadow-2xl shadow-red-900/30"
                    />
                </div>

            </section>
        </main>
    )

}

export {Home}