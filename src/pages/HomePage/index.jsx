import { useContext, useEffect, useState } from 'react'
import ServiceCard from '../../components/CardService'
import { Container, ServiceList } from './styled'
import axios from 'axios'
import EditServiceModal from '../../components/editServiceModal'
import AuthContext from '../../contexts/authContext'
import { Button, Form, Modal } from 'react-bootstrap'

function HomePage() {
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const [serviceProvider, setServiceProvider] = useState([])
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const { token } = useContext(AuthContext)

  const [showCreateModal, setShowCreateModal] = useState(false)

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    category_id: '',
    photo_url: '',
    price: '',
    is_active: true
  })

  const handleCreateService = () => {
    setShowCreateModal(true)
  }

  const handleCreateNewService = event => {
    const { name, value, type, checked } = event.target

    // Handle checkbox inputs
    const inputValue = type === 'checkbox' ? checked : value

    setNewService(prevNewService => ({
      ...prevNewService,
      [name]: inputValue
    }))
  }

  const handleSaveCreate = async () => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/services`,
        newService
      )

      // Faz uma nova chamada para obter a lista atualizada de serviços
      const updatedServicesResponse = await api.get(
        `${import.meta.env.VITE_API_URL}/services`
      )

      setServices(updatedServicesResponse.data)
      handleCloseCreateModal()
    } catch (error) {
      console.error('Error creating service:', error.response.data)
    }
  }

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => {
        const updatedServices = res.data.map(service => {
          const correspondingProvider = serviceProvider.find(
            provider => provider.id === service.user_id
          )
          return {
            ...service,
            serviceProvider: correspondingProvider
          }
        })

        setServices(updatedServices)
      })
      .catch(err => {
        console.log('Erro ao obter serviços: ', err)
      })

    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then(res => {
        setCategories(res.data)
      })
      .catch(err => {
        console.log('Erro ao obter categorias: ', err)
      })

    axios
      .get(`${import.meta.env.VITE_API_URL}/user`)
      .then(res => {
        setServiceProvider(res.data)
      })
      .catch(err => {
        console.log('Erro ao obter usuario: ', err)
      })
  }, [])

  const handleEditService = service => {
    setSelectedService(service)
    setShowEditModal(true)
  }

  const handleSaveEdit = editedService => {
    const updatedServices = services.map(service =>
      service.id === editedService.id ? editedService : service
    )
    setServices(updatedServices)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
    setSelectedService(null)
  }

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const handleDeleteService = serviceId => {
    api
      .delete(`${import.meta.env.VITE_API_URL}/services/${serviceId}`)
      .then(() => {
        setServices(prevServices =>
          prevServices.filter(service => service.id !== serviceId)
        )
      })
      .catch(error => {
        console.error('Error deleting service:', error.response.data)
      })
  }

  return (
    <Container>
      <h1>Services</h1>

      <ServiceList>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={() => handleEditService(service)}
            onDelete={handleDeleteService}
            serviceProvider={serviceProvider}
          />
        ))}

        {showEditModal && (
          <EditServiceModal
            service={selectedService}
            onSave={handleSaveEdit}
            onClose={handleCloseEditModal}
            categories={categories}
          />
        )}
        <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newService.title}
                  onChange={handleCreateNewService}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={newService.description}
                  onChange={handleCreateNewService}
                />
              </Form.Group>
              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category_id"
                  value={newService.category_id}
                  onChange={handleCreateNewService}
                />
              </Form.Group>

              <Form.Group controlId="formPhotoUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="photo_url"
                  value={newService.photo_url}
                  onChange={handleCreateNewService}
                />
              </Form.Group>

              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={newService.price}
                  onChange={handleCreateNewService}
                />
              </Form.Group>

              <Form.Group controlId="formIsActive">
                <Form.Check
                  type="checkbox"
                  label="Active"
                  name="is_active"
                  defaultChecked={true}
                  value={newService.is_active}
                  onChange={handleCreateNewService}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCreateModal}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSaveCreate(newService)}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </ServiceList>
      <Button variant="primary" onClick={handleCreateService}>
        Create New Service
      </Button>
    </Container>
  )
}

export default HomePage
