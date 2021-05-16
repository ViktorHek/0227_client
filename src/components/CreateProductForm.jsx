import React from 'react'
import ProductService from '../modules/ProductService'
import { useDispatch } from 'react-redux'

const CreateProductForm = () => {
  const dispatch = useDispatch()

  return (
    <form
      data-cy="create-form"
      onSubmit={(event) => ProductService.create(event, dispatch)}
    >
      <input
        type="text"
        name="title"
        placeholder="Titel"
        data-cy="create-title"
      />
      <textarea
        type="text"
        name="description"
        placeholder="Text"
        data-cy="create-description"
      />
      <input
        data-cy='create-bild'
        name='image_input'
        type="file"
        label="Bild:"
      />
      <button
        type="submit"
        value="submit"
        data-cy="create-btn"
      >
        Skapa
      </button>
    </form>
  )
}

export default CreateProductForm
