import React, { Fragment, useEffect, useState } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
  //comprobar si hay citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = []
   
  }
  
  const [citas, setCitas] = useState(citasIniciales)

  const [ visible, setVisible ] = useState(false)

  const mostrarFormulario = () => {
    setVisible(true)
  }

  
  useEffect(() => {
    //comprobar si hay citas en localStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
      
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
      
    }

  },[citas])


  //funcion que paso al Formulario y recibe la cita agregada
  const crearCita = cita => setCitas([...citas, cita])

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  //condicional para mostrar el titulo
  const subtitulo = (citas.length === 0) ? "No hay Citas :(" : "Administra tus Citas"
  



  return (
    <Fragment>

      <h1>Administrador de mascotas</h1>

      <div className='citas'>
        <div className='citas__container'>

         {visible ? (
            <div className='citas__form'>
                <Formulario 
                  crearCita={crearCita}
                  setVisible={setVisible}
                />
            </div>
         )  : (
           <button
             className='btn cita__dealta'
             onClick={mostrarFormulario}
           >Agregar una Cita</button>
         )
        
        }


          <div className='citas__citas-turno'>
            <h2>{ subtitulo }</h2>

            { citas.map( cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}

          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
