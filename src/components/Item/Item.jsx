import React from 'react'
import '../Item/itemStyles.css'
import { Link } from 'react-router-dom'
 

const Item = ({id, nombre, imagen, precio}) => {
 
  return (
   <div className='contenedor-productos'>
      <div className='cards' style={{border: "1px solid #e6e6e6"}}>
        <h5>{nombre}</h5>
        <img src={imagen}></img>
        <p>${precio}</p>
        <button className='boton-detalle'> 
         <Link to={`/product/${id}`}>
            Ver detalles
          </Link>
        </button> 
      </div>
  </div>
  )
}


export default Item