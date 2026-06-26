import {useState, useEffect} from "react";

function UseFetch (url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        async function load() {
            try{
                setIsloading(true);
                setError(null);
                const response = await fetch(url);
                if(!response.ok) throw new Error ("Error en la peticion")
                setData(await response.json())
            }catch(error){
                setError(error.message)
            }finally{
                setIsloading(false)
            }
        }
        load()
    }, [url]);
    return {data, isLoading, error};
}

export {UseFetch}