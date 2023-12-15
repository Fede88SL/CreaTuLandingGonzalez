import { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainerStyles.css'
import { getProductsByCategory, getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import PropagateLoader from "react-spinners/PropagateLoader";

const ItemListContainer = ({title}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()
  useEffect (() => {
    setIsLoading(true)
    if(categoryId) {
      getProductsByCategory(categoryId)
        .then((prod) => setData(prod))
        .catch((err)=> console.log(err))
        .finally(() =>setIsLoading(false))
      }else{
          getProducts()
          .then((prod) => {
          setData(prod)
      })
      .catch((err)=> console.log(err))
      .finally(() =>setIsLoading(false))
    }
  }, [categoryId])

  return (
    <div>
        <h1 id='greeting'>{title}</h1>
        {isLoading ? <PropagateLoader color="#36d7b7" /> : <ItemList data={data} />
        }
    </div>
  )
}

export default ItemListContainer