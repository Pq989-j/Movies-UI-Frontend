import { useEffect, useState } from "react";
import { Link } from "react-router-dom";7


function Characters () {
    const[characters, setCharacter] = useState(null)
    const[isloading, setIsloading] = useState(false)
    const[error, setError] = useState(null)
    const[page, setPage] = useState(1)

    useEffect(() => {
        async function load() {
            try{
                setIsloading(true)
                setError(null)
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                console.log(response)
                if(!response.ok) throw new Error("No se pueden cargar personajes")
                const data = await response.json()
                setCharacter(data.results)
                console.log(data.results)
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
        <div>
            <ul>
                {characters?.map((character) => (
                    
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export {Characters}