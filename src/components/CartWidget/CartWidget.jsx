import React from 'react'
import { PiShoppingCartBold } from 'react-icons/pi'

const CartWidget = () => {
  return (
    <div>
        <PiShoppingCartBold size={30}/>
        <span>0</span> 
    </div>
  )
}

export default CartWidget