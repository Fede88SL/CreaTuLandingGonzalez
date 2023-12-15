import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import PropagateLoader from "react-spinners/PropagateLoader";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { itemId } = useParams()

 
  useEffect(() => {
    setIsLoading(true)
    getProductById(itemId)
      .then((prod) => {
        setProduct(prod)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [itemId])
  return (
    <div>
      {isLoading ? <PropagateLoader color="#36d7b7" /> : <ItemDetail {...product} /> }
    </div>
  )
}

export default ItemDetailContainer