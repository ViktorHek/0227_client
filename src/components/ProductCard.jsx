import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <h1 data-cy={`product-${product.id}`} key={product.id} >{product.title}</h1>
    </div>
  )
}

export default ProductCard
