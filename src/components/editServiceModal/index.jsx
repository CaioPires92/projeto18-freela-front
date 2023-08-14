import { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import AuthContext from '../../contexts/authContext'

const EditServiceModal = ({ service, onSave, categories, onClose }) => {
  const { token } = useContext(AuthContext)

  const [editedService, setEditedService] = useState({
    ...service,
    is_active: service.is_active || false
  })

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target

    // Handle checkbox inputs
    const inputValue = type === 'checkbox' ? checked : value

    setEditedService(prevService => ({
      ...prevService,
      [name]: inputValue
    }))
  }

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Substitua pela URL da sua API
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const handleSave = () => {
    const { id, user_id, category, name, ...updates } = editedService

    api
      .put(
        `${import.meta.env.VITE_API_URL}/services/${editedService.id}`,
        updates
      )
      .then(response => {
        onSave(response.data)

        onClose()
        window.location.reload()
      })
      .catch(error => {
        console.error('Erro ao editar o serviço:', error.response.data)
      })
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
         <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={editedService.category}
              onChange={handleInputChange}
            >
              {categories.map(category => (
                <option key={category.category_id} value={category.name}>
                  {category.name}
                 </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedService.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={editedService.description}
              onChange={handleInputChange}
            />
          </Form.Group>


          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={editedService.price}
              onChange={handleInputChange}
            />
          </Form.Group>


          
          <Form.Group controlId="formIsActive">
            <Button
              variant={editedService.is_active ? 'success' : 'danger'}
              style={{ marginTop: '10px' }}
              onClick={() =>
                setEditedService(prevService => ({
                  ...prevService,
                  is_active: !prevService.is_active
                }))
              }
            >
              {editedService.is_active ? 'Active' : 'Inactive'}
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditServiceModal
