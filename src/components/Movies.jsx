import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchButton from "./SearchButton";

import { useSearchParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Movies () {
    const[movies, setMovies] = useState(null)
    const[isloading, setIsloading] = useState(false)
    const[error, setError] = useState(null)
    const[page, setPage] = useState(1)
    const limit = 20;

    

    useEffect(() => {
        async function load() {
            try{
                setIsloading(true)
                setError(null)
                const response = await fetch(`${API}/movies?page=${page}&limit=${limit}`)
                if(!response.ok) throw new Error("No se pueden cargar peliculas")
                const data = await response.json()
                setMovies(data)
            }catch(error){
                setError(error.message)
            }finally{
                setIsloading(false)
            }
        }
        load()
    }, [page])

    if(isloading) return <p>Cargando....</p>
    if(error) return <p>Error: {error}</p>
    return (
        <div className="bg-black flex flex-col items-center p-4">
            <div>
                <SearchButton />
            </div>
            <ul className="grid grid-cols-5 gap-[6em] p-8">
                {movies?.map((movie) => (
                    
                    <li className="bg-zinc-900 rounded-2xl overflow-hidden w-56  h-[390px] " key={movie._id}>
                        <img loading="lazy" className="w-full h-80 object-fill" src={movie.poster} alt={movie.title} />
                        <Link className="text-white hover:opacity-80 mt-2 text-center block break-words px-2" to={`/movies/${movie._id}`}>{movie.title}</Link>
                    </li>
                ))}
             
                
            </ul>
            <div className="flex justify-around w-full px-4 ">
                <button disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" 
                 onClick={() => setPage(prev => Math.max(1, prev - 1))}>Anterior
                </button>
                <button disabled={movies?.length < limit} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" 
                    onClick={() => setPage(prev => prev + 1)}>Siguiente
                </button>
            </div>
            
            
        </div>
        
    )
}

export {Movies}