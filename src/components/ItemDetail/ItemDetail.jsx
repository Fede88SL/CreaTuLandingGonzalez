import React, {useState} from 'react'
import '../ItemDetail/ItemDetailStyles.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({categoria, descripcion, imagen, nombre, precio, stock, id}) => {

  const [quantity, setQuantity] = useState(0)

  const onAdd = (quantity) => {
    setQuantity(quantity)
    console.log(`Agregaste ${quantity} productos`)
  }

  return (
    <div className='item-detail-container' >
        <h5>{nombre}</h5>
        <img src={imagen}></img>
        <p>${precio}</p>
        <p>Stock: {stock}</p>
        <p>{descripcion}</p>
        <div className="counter-wrapper">
          {quantity > 0 ? <Link to={'/cart'} >Ir al carrito</Link> : 
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} /> }
        
        </div>
      </div>
  )
}

export default ItemDetail