import {
  Card,
  CardImage,
  CardContent,
  ServiceTitle,
  ServiceCategory,
  ServicePrice,
  ButtonContainer,
  EditButton,
  DeleteButton,
  ServiceDescription,
  ProviderInfo,
  ProviderName,
  ProviderDetail
} from './styled'
import { useContext } from 'react'
import AuthContext from '../../contexts/authContext'

function ServiceCard({ service, onEdit, onDelete, serviceProvider }) {
  const { photo_url, category, title, price, description } = service
  const { token, userId } = useContext(AuthContext)

  const isUserOwner = userId === service.user_id

  // Encontre o provedor cujo ID seja igual ao user_id do serviço
  const providerForService = serviceProvider.find(
    provider => provider.id === service.user_id
  )

  return (
    <Card>
      <CardImage src={photo_url} alt={title} />
      <CardContent>
        <ServiceCategory>{category}</ServiceCategory>
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceDescription>{description}</ServiceDescription>
        <ServicePrice>{`R$ ${price.replace('.', ',')}`}</ServicePrice>

        {providerForService && (
          <ProviderInfo>
            <ProviderName>Provider: {providerForService.name}</ProviderName>
            <ProviderDetail>Phone: {providerForService.phone}</ProviderDetail>
            <ProviderDetail>City: {providerForService.city}</ProviderDetail>
          </ProviderInfo>
        )}

        {token &&
          (isUserOwner ||
            (providerForService && providerForService.id === userId)) && (
            <ButtonContainer>
              <EditButton onClick={() => onEdit(service)}>Edit</EditButton>
              <DeleteButton onClick={() => onDelete(service.id)}>
                Delete
              </DeleteButton>
            </ButtonContainer>
          )}
      </CardContent>
    </Card>
  )
}

export default ServiceCard
