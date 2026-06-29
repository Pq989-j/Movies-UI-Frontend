import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_API_URL;

function MovieDetail () {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const[isloading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            try{
                setIsLoading(true)
                const response = await fetch(`${API}/movies/${id}`)
                if(!response.ok) throw new Error("Personaje no encontrado")
                setMovie(await response.json())
            }catch(error){
                setError(error)
            } finally{
                setIsLoading(false)
            }
        }
        load()
    }, [id])

    if (isloading) return <p>Esta cargando...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div className="flex justify-center h-screen bg-black">
            <div className=" p-6">
                <img className="rounded-2xl w-full h-200 object-fill"src={movie?.poster} alt={movie?.title} />
            </div>
            <div className="flex flex-col p-6 text-white justify-center align-center">
                <h2 className="">Titulo: {movie.title}</h2>
                <p>Generos: {movie.genre}</p> 
                <p>director: {movie.director}</p>
                <p>Año de lanzamiento: {movie.release}</p>
                <button onClick={() => navigate(-1)}>Volver</button>
            </div>

        </div>
    )
    
}

export {MovieDetail}