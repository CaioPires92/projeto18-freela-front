import { useState } from 'react'
import ServiceCard from '../../components/CardService'
import { Container, ServiceList } from './styled'

function HomePage() {
  const [services, setServices] = useState([
    {
      id: 1,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 1',
      name: 'Service 1',
      price: '$100'
    },
    {
      id: 2,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 2',
      name: 'Service 2',
      price: '$150'
    },
    {
      id: 3,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 2',
      name: 'Service 2',
      price: '$150'
    },
    {
      id: 4,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 2',
      name: 'Service 2',
      price: '$150'
    },
    {
      id: 5,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 2',
      name: 'Service 2',
      price: '$150'
    },
    {
      id: 6,
      image:
        'https://img.freepik.com/fotos-premium/pedreiro-colocando-tijolos-em-argamassa-na-construcao-de-novas-casas-residenciais_245726-1808.jpg',
      category: 'Category 2',
      name: 'Service 2',
      price: '$150'
    }
    // Adicione mais serviços aqui...
  ])

  const handleEditService = editedService => {
    // Implemente a lógica de edição do serviço aqui
    console.log('Edit service:', editedService)
  }

  const handleDeleteService = serviceId => {
    // Implemente a lógica de exclusão do serviço aqui
    console.log('Delete service with ID:', serviceId)
  }

  return (
    <Container>
      <h1>Services</h1>
      <ServiceList>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={handleEditService}
            onDelete={handleDeleteService}
          />
        ))}
      </ServiceList>
    </Container>
  )
}

export default HomePage
