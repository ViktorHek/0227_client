import axios from 'axios'

const ProductModule = async () => {
  let result = await axios.get('/products')
  return result.data.products
}

export default ProductModule
