import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Characters () {
    const[movies, setMovies] = useState(null)
    const[isloading, setIsloading] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() => {
        async function load() {
            try{
                setIsloading(true)
                setError(null)
                const response = await fetch(`${API}/movies`)
                console.log(response)
                if(!response.ok) throw new Error("No se pueden cargar peliculas")
                const data = await response.json()
                console.log(data)
                setMovies(data)
            }catch(error){
                setError(error.message)
            }finally{
                setIsloading(false)
            }
        }
        load()
    }, [])

    if(isloading) return <p>Cargando....</p>
    if(error) return <p>Error: {error}</p>
    return (
        <div>
            <ul>
                {movies?.map((movie) => (
                    
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export {Characters}