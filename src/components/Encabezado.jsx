import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListaCoaches from './ListaCoaches'
import RegistrarCoach from './RegistrarCoach'
import ActualizarCoach from './ActualizarCoach'

export default function Encabezado() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/registrar' className="nav-link active">Registrar Coach</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

            <Routes>
                <Route path='/' element={<ListaCoaches />}/>
                <Route path='/registrar' element={<RegistrarCoach />} />
                <Route path='/actualizar/:id_coach' element={<ActualizarCoach />} />
            </Routes>
        </BrowserRouter>
    )
}
