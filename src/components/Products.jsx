import React, {useEffect} from 'react'
import ProductModule from '../modules/ProductModule'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from './ProductCard'

const Products = () => {
  const dispatch = useDispatch()
  const {productList} = useSelector(state => state)
  // const fetchProducts = async () => {
  //   debugger
  //   let result = await ProductModule.index()
  //   dispatch({type: 'SET_PRODUCT_INDEX', payload: result})
  // }
  useEffect(() => {
    debugger
    ProductModule.index(dispatch)
    // fetchProducts()
  }, [dispatch])

  let productIndex
  productIndex = (
    <div>
      {productList.map((product) => {
        return <ProductCard product={{ ...product }} />
      })}
    </div>
  )

  return (
    <>
      {
        productList.length ? {productIndex} : <h1>Inget att köpa än. vänta tills nästa relece</h1>
      }
    </>
  )
}

export default Products
