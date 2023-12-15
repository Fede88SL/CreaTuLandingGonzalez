import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemListStyles.css'

const ItemList = ( {data} ) => {
  return (
    <div className="item-list-container">
        {data.map((productos) =>(
            <div key={productos.id} className="item-wrapper">
                <Item {...productos} />
            </div>
        ) )}
    </div>
  )
}

export default ItemList