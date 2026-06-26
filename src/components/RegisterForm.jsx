import { useState } from "react";
import { Button } from "./Button";

const API = import.meta.env.VITE_API_URL

function RegisterForm () {
    const [data, setData] = useState({name: "", email: "", password: ""})
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const {name, value} = e.target
        setData((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventdefault ()
        const foundedErrors = validate(data)
        setErrors(foundedErrors)
        if(foundedErrors.length > 0) return;

        console.log("Eviando cosas")    
    }

    function validate(data) {
        const errors = {}

        if(!data.name.trim()) errors.name = "El nombre es obligatorio"
        if(!data.email.includes("@")) errors.email = "Email de formato no valido"
        if(!data.password.length < 6) errors.password = "Minimo 6 caracteres"

        return errors
    }
    async function register(values) {
        
    }

    return(
        <form onSubmit={handleSubmit} className="min-inline-20 bg-black mx-auto flex max w-md flex-col gap-4 p-6">
            <h2 className="flex justify-center text-2xl font bold text-white">Crear Cuenta</h2>

            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Name</label>
                <input type="text" name="name" value={data.name} placeholder="type name" onChange={handleChange} 
                className="rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"/>
                {errors.name && <span className="text-sm text-red-600">{errors.name} </span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Email</label>
                <input type="email" name="email" value={data.email} placeholder="test@example.com" onChange={handleChange}
                className="rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none" />
                {errors.email && <span className="text-sm text-red-600">{errors.email} </span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Password</label>
                <input type="password" name="password" value={data.password} placeholder="******"onChange={handleChange} 
                className="rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none"/>
                {errors.password && <span>{errors.password} </span>}
            </div>
            <div className="flex justify-center">
                <Button />
            </div>
        </form>
    )
}

export {RegisterForm}