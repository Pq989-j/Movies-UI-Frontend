import { useEffect, useState } from "react";

function EffectPage () {
    const[character, setCharacter] = useState(null)
    const[isloading, setIsloading] = useState(false)
    const[error, setError] = useState(null)
    const[page, setPage] = useState(1)

    useEffect(() => {
        async function load() {
            try{
                setIsloading(true)
                setError(null)
                const response = await fetch("https://rickandmortyapi.com/api/character?page=${page}")
                if(!response.ok) throw new Error("No se puede cargar personaje")
                const data = await response.json()
                setCharacter(data)
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
        <div className="">
            <div>
                <button onClick={() => setPage(page -1 )}
                disabled={page === 1}
            ></button>
            </div>
        </div>
    )
}

export {EffectPage}