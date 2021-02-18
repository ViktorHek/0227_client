import React, { useState, useEffect } from 'react'
import ProductModule from "../modules/ProductModule";
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    let result = await ProductModule()
    setProducts(result)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  let productIndex = products.map((product) => {
    return (
      <ul>
        <ProductCard product={{ ...product }} />
      </ul>
    )
  })

  return (
    <>
      {productIndex && productIndex}
    </>
  )
}

export default Products
