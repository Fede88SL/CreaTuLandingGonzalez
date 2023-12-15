import React from 'react'
import useCounter from '../../hooks/useCounter'
import '../ItemCount/ItemCountStyles.css'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, increment, decrement} = useCounter(initialValue, stock)
  return (
    <div>
    <div className='botonera-contador'>
      <button onClick={decrement}>-</button>
      <h5>{count}</h5>
      <button onClick={increment}>+</button>
      </div>
      <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
    
  )
}

export default ItemCount