import axios from 'axios';
import React, { useEffect, useState } from 'react'


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
                    <th>Acciones</th>
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
                                    <td>{coach.id_materia}</td>
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
