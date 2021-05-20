import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'


const Formulario = ({crearCita, setVisible}) => {

    const [ cita, setCita ] = useState({mascota: '', propietario: '', fecha: '', sintomas: ''})

    const [error, setError] = useState(false)

    
    //Funcion que se ejecuta cuando el usuario escribe en los inputs
    const handleChange = e => {
        
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    
    //extraer los valores
    const {mascota, propietario, fecha, sintomas} = cita
    
    //cuando el usuario presiona agregar cita
    const handleSubmit = e => {
        e.preventDefault()
        
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || sintomas.trim() === '') {
            
            setError(true)
            return
        }
        
        //si pasa la validacion errror regresa a ser False
        setError(false)
        
        //asignar un ID
        cita.id = uuidv4()
        
        //pasar al state principal
        crearCita(cita)
        setVisible(false)
        
        //reiniciar el form
        setCita({mascota: '', propietario: '', fecha: '', sintomas: ''})
    }
    
    
    






    return (
        <Fragment >

            <h2>Crear Cita</h2>

            {error && <p className='alerta-error'>Completa todos los  campos</p>}

            <form 
                className='form-group'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    autoComplete='off'
                    className='form-control mb-3'
                    onChange={handleChange}
                    value={mascota}
                />

                <input 
                    type="text"
                    name="propietario"
                    placeholder="Nombre Dueño de mascota"
                    autoComplete='off'
                    className='form-control mb-3'
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha y Hora</label>
                <input 
                    type="datetime-local"
                    name="fecha"
                    className='form-control mb-3'
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Sintomas:</label>
                <textarea
                    name="sintomas"
                    placeholder='Sintomas...'
                    autoComplete='off'
                    className='form-control mb-4'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <input
                    type="submit"
                    value="Crear Cita"
                    className='btn'
                
                />
            </form>

        </Fragment>
       
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
    setVisible: PropTypes.func.isRequired
}


export default Formulario
