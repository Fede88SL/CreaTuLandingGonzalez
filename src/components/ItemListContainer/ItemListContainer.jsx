import React from 'react'
import '../ItemListContainer/ItemListContainerStyles.css'

const ItemListContainer = ({title}) => {
  return (
    <div>
        <h1 id='greeting'>{title}</h1>
    </div>
  )
}

export default ItemListContainer