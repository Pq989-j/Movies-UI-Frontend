import { useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

    function validate(data) {
        const errors = {}

        if(!data.email.includes("@")) errors.email = "Email de formato no valido"
        if(!data.password.length > 6) errors.password = "Minimo 6 caracteres"


        return errors
    }

function RegisterForm () {
    const [data, setData] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    function handleChange(e) {
        const {name, value} = e.target
        setData((prev) => ({...prev, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const foundedErrors = validate(data)
        setErrors(foundedErrors)
        if(foundedErrors.length > 0) return;
        try{
            await register(data.email, data.password)
            navigate("/auth/login")
        }catch(error){
            setErrors(error.message)
        }finally{
            setIsLoading(false)
        }

    }

    async function register(email, password) {
        const response = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password}),
        })
        if(!response.ok) throw new Error("Email o contraseña incorrectos")
        const data = await response.json()
    }
    return(
        
        <form onSubmit={handleSubmit} className="min-inline-20 bg-black mx-auto flex max w-md flex-col gap-4 p-15">
            <h2 className="flex justify-center text-2xl font bold text-white">Crear Cuenta</h2>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Email</label>
                <input type="email" name="email" value={data.email} placeholder="test@example.com" onChange={handleChange}
                className="text-white rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none" />
                {errors.email && <span className="text-sm text-red-600">{errors.email} </span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Password</label>
                <input type="password" name="password" value={data.password} placeholder="******"onChange={handleChange} 
                className="text-white rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none"/>
                {errors.password && <span>{errors.password} </span>}
            </div>
            <div className="flex justify-center">
                <Button />
            </div>
        </form>
    )
}

export {RegisterForm}