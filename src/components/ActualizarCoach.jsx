import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActualizarCoach() {
    const {id_coach} = useParams();
    //console.log(id_coach);

    const [coach, setCoach] = useState({});

    const obtenerCoachById = () => {
        axios.get(`http://127.0.0.1:8000/api/getCoach/${id_coach}`).then((response) =>{
            console.log(response.data)
            setCoach(response.data) //[]
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleData = (e) => {
        setCoach({...coach, [e.target.name]:e.target.value});
    }

    const ActualizarCoach = (id) => {
        console.log(id);
        axios.put(`http://127.0.0.1:8000/api/actualizarCoach/${id}`, coach).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        obtenerCoachById();
    }, [])

    console.log(coach)
    return (
        <div className='container'>
            <h1 className='text-center'>Editar Datos</h1>

                <label htmlFor="">Nombre</label>
                <input type="text" className='form-control' value={coach.nombre} name='nombre' id='' onChange={handleData}/>

                <label htmlFor="">Apellido</label>
                <input type="text" className='form-control' value={coach.apellido} name='apellido' onChange={handleData}/>

                <label htmlFor="">Telefono</label>
                <input type="text" className='form-control' value={coach.telefono} name='telefono' onChange={handleData}/>

                <label htmlFor="">Correo</label>
                <input type="text" className='form-control' value={coach.correo} name='correo' onChange={handleData}/>

                <button className='btn btn-primary mt-4' onClick={() => ActualizarCoach(coach.id)}>Actualizar Datos</button>
        </div>
    )
}
