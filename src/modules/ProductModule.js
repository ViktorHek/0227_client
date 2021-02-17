import axios from 'axios'

const ProductModule = {
  async index(dispatch) {
    debugger
    const response = await axios.get('/products')
    dispatch({
      type: 'SET_PRODUCT_INDEX',
      payload: response.data.products
    })
  }
}

export default ProductModule
