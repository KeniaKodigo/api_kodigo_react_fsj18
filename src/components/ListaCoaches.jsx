import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function ListaCoaches() {
    //creando un estado para la lista de coaches
    const [coaches, setCoaches] = useState([]);

    //metodo para la peticion de la api
    /**
     * fecth, axios (get, post, put, delete)
     */
    const obtenerCoaches = () => {
        axios.get("http://127.0.0.1:8000/api/getCoaches").then((response) =>{
            console.log(response.data.detalle)
            setCoaches(response.data.detalle) //[]
        }).catch((error) => {
            console.log(error)
        })
    }

    const desactivarCoach = (id) => {
        console.log(id)
        axios.put(`http://127.0.0.1:8000/api/deshabilitarCoach/${id}`).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    //montando el metodo obtenerCoaches()
    useEffect(() => {
        obtenerCoaches();
    }, [])

    console.log(coaches)
    return (
        <div className='container'>
            <h1 className='text-center text-success'>CRUD de Coaches</h1>
            <table className='table'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Materia</th>
                    <th colSpan='3'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coaches.map((coach, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{coach.id}</td>
                                    <td>{coach.nombre}</td>
                                    <td>{coach.apellido}</td>
                                    <td>{coach.telefono}</td>
                                    <td>{coach.correo}</td>
                                    <td>{coach.materia}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/asignacionBootcamps/${coach.id}/${coach.nombre}`}>Asignar Bootcamps</Link>
                                    </td>
                                    <td>
                                        <Link className='btn btn-warning' to={`/actualizar/${coach.id}`}>Editar</Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => desactivarCoach(coach.id)}>Desactivar</button>
                                    </td>
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
