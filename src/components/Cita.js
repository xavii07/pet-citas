import React, {memo} from 'react';
import PropTypes from 'prop-types'



const Cita = memo(({ cita, eliminarCita }) => {
    

    const{mascota, propietario, fecha, sintomas } = cita



    const handleClick = () => {
        eliminarCita(cita.id)
    }


    
    return (

            <div className='cita'>
                <p>Mascota: <span>{mascota}</span></p>
                <p>Dueño: <span>{propietario}</span></p>
                <p>Fecha y Hora: <span>{fecha}</span></p>
                <p>Sintomas: <span>{sintomas}</span></p>

                <button 
                    className='btn cita__dealta'
                    onClick={handleClick}
                >Mascota atendida &#x2714;</button>
            </div>

        )})


Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
