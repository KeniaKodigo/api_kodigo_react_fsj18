import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

export default function AsignacionBootcamps() {
    //rescatamos los parametros de la ruta
    const {id_coach, coach} = useParams();
    const [bootcamps, setBootcamps] = useState([]);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            bootcamps: []
        }
    });

    const obtenerBootcamps = () => {
        axios.get("http://127.0.0.1:8000/api/bootcamps").then((response) =>{
            console.log(response.data)
            setBootcamps(response.data) //[]
        }).catch((error) => {
            console.log(error)
        })
    }

    const asignarBootcamps = (data) => {
        console.log(data)
        //guardamos el detalle de bootcamps por coach
        axios.post(`http://127.0.0.1:8000/api/asignacionBootcamps/${id_coach}`, data).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        obtenerBootcamps();
    }, [])

    console.log(bootcamps)
    return (
        <div className='container'>
            <h1 className='text-center'>Asignacion de Bootcamps por Coach</h1>

            <form action="" onSubmit={handleSubmit(asignarBootcamps)}>
                <label htmlFor="">Coach:</label>
                <p><strong>{coach}</strong></p>

                <label htmlFor="">Seleccione Bootcamps</label>
                {
                    bootcamps.map((item, indice) => {
                        return (
                            <div key={indice}>
                                <input type="checkbox" {...register("bootcamps")} value={item.id}/> {item.bootcamp}
                            </div>
                        )
                    })
                }

                <input type="submit" className='btn btn-dark mt-4' value='Asignar Bootcamps'/>
            </form>
        </div>
    )
}
