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
        <div className="bg-zinc-900 rounded-2xl overflow-hidden w-56  h-[390px] ">
            <h2 className="">{movie.title}</h2>
            <button onClick={() => navigate(-1)}>Volver</button>
            <img src={movie.poster} alt={movie.title} />
            <p>Generos: {movie.genre}</p>
            <p>director: {movie.director}</p>
        </div>
    )
    
}

export {MovieDetail}