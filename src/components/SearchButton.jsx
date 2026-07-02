import { useState, useEffect } from "react"

import { Movies } from "./Movies";

function SearchButton () {
    const[movies, setMovies] = useState(null)

    const [search, setSearch] = useState("")

    

    function filteredMovies () {
        movies.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
    };
    return(
        <div >
            <input type="text" name="title" value={search} className="text-white" placeholder="Buscar🔎" onChange={(e) => setSearch (e.target.value)} />

                
            
        </div>
    )
}

export default SearchButton