import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function RegistrarCoach() {
    //creando el objeto de useForm
    const { register, handleSubmit, formState: {errors} } = useForm();

    /**
     * register: metodo que se encarga de capturar los datos
     * handleSubmit (onSubmit): acciona el formulario
     * errors: validar los inputs (campos)
     */

    const registrarCoach = (data) => {
        //metodo para guardar la informacion del coach a la bd
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/registrarCoach', data).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Registro de Coaches</h1>

            <form action="" onSubmit={handleSubmit(registrarCoach)}>
                <label htmlFor="">Nombre</label>
                <input type="text" className='form-control' {...register('nombre')}/>

                <label htmlFor="">Apellido</label>
                <input type="text" className='form-control' {...register('apellido')}/>

                <label htmlFor="">Telefono</label>
                <input type="text" className='form-control' {...register('telefono')}/>

                <label htmlFor="">Correo</label>
                <input type="text" className='form-control' {...register('correo')}/>

                <label htmlFor="">Password</label>
                <input type="text" className='form-control' {...register('password')}/>

                <label htmlFor="">Seleccione Materia</label>
                <select name="" className='form-control' {...register('id_materia')}>
                    <option value="1">Programacion</option>
                    <option value="2">Socioemocionales</option>
                    <option value="3">Ingles</option>
                </select>

                <input type="submit" className='btn btn-dark mt-4' value='Guardar Datos'/>
            </form>
        </div>
    )
}
