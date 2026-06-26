import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CharacterDetail () {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const[isloading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            try{
                setIsLoading(true)
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                if(!response.ok) throw new Error("Personaje no encontrado")
                setCharacter(await response.json())
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
        <div>
            <h2>{character.name}</h2>
            <button onClick={() => navigate("/")}>Volver</button>
            <img src={character.image} alt={character.name} />
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
        </div>
    )
    
}

export {CharacterDetail}