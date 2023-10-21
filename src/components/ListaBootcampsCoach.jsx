import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function ListaBootcampsCoach() {
    const [coaches, setCoaches] = useState([]);
    const { register, handleSubmit } = useForm();

    //estado para manejar la lista de los bootcamps en base al coach
    const [lista, setLista] = useState([]);

    const obtenerCoaches = () => {
        axios.get("http://127.0.0.1:8000/api/getCoaches").then((response) =>{
            console.log(response.data.detalle)
            setCoaches(response.data.detalle) //[]
        }).catch((error) => {
            console.log(error)
        })
    }

    const listaBootcamps = (data) => {
        console.log(data)
        axios.post('http://127.0.0.1:8000/api/listaBootcampsCoach', data).then((response) => {
            console.log(response.data)
            setLista(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        obtenerCoaches();
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Bootcamps por Coach</h1>

            <form action="" onSubmit={handleSubmit(listaBootcamps)}>
                <label htmlFor="">Seleccione Coach:  </label>
                <select name="" className='form-control' {...register("id_coach")}>
                    {
                        coaches.map((coach, indice) => {
                            return (
                                <option value={coach.id}>{coach.nombre}</option>
                            )
                        })
                    }
                </select>

                <input type="submit" className='btn btn-success mt-2' value='Verificar'/>
            </form>

            <table className='table'>
                <thead>
                    <th>Bootcamps</th>
                </thead>
                <tbody>
                    {
                        lista.map((value, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{value.bootcamp}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
