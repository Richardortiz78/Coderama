import { useState } from "react"
import { useAuthContext } from "../context/AuthContext/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
    const [useForm, setUserForm] = useState({name: "", password: ""})
    const {user, login} = useAuthContext();

    const navigate = useNavigate()

       useEffect(() => {
        if (user) {
            navigate("/admin-panel/alta-productos", { replace: true })
        }
    }, [user])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserForm({...useForm, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const success = login(useForm.name, useForm.password)

        if(success){
            navigate("/admin-panel/alta-productos")
        } else{
            alert("Credenciales Incorrectas")
            setUserForm({name:"", password: ""})
        }
    }

    return <form onSubmit ={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div>
            <label>Usuario:</label>
            <input 
            type="text"
            name="name"
            value={useForm.name}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input 
            type="password"
            name="password"
            value={useForm.password}
            onChange={handleChange}
            />
        </div>
        <button type="submit">Iniciar Sesión</button>
    </form>

}