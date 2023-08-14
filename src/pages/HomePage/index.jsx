import { useContext, useEffect, useState } from 'react'
import ServiceCard from '../../components/CardService'
import { Container, ServiceList } from './styled'
import axios from 'axios'
import EditServiceModal from '../../components/editServiceModal'
import AuthContext from '../../contexts/authContext'

function HomePage() {
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const [serviceProvider, setServiceProvider] = useState([])

  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => {
        setServices(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('Erro ao obter serviços: ', err)
      })

    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then(res => {
        setCategories(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('Erro ao obter categorias: ', err)
      })

    axios
      .get(`${import.meta.env.VITE_API_URL}/user`)
      .then(res => {
        setServiceProvider(res.data)
        console.log(res.data)
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
    baseURL: import.meta.env.VITE_API_URL, // Substitua pela URL da sua API
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
        console.log(`Service with ID ${serviceId} has been deleted`)
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
        {/* Renderize o modal de edição */}
        {showEditModal && (
          <EditServiceModal
            service={selectedService}
            onSave={handleSaveEdit}
            onClose={handleCloseEditModal}
            categories={categories}
          />
        )}
      </ServiceList>
    </Container>
  )
}

export default HomePage
