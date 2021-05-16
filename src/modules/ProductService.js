import axios from 'axios'
import toBase64 from "./toBase64"

const ProductService = {
  async create(event, dispatch) {
    event.preventDefault()
    let headers = JSON.parse(localStorage.getItem('credentials'))
    try {
      let encodedImage
      if (event.target.image_input[0]) {
        encodedImage = await toBase64(event.target.image_input[0])
      }
      let response = await axios.post('/products',
      {
        product: {
          title: event.target.title.value,
          description: event.target.description.value
        },
      },
      {
        headers: headers
      }
      )
      event.target.reset()
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export default ProductService