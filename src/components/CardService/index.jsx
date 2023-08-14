import PropTypes from 'prop-types'
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
  ServiceDescription
} from './styled'
import { useContext } from 'react'
import AuthContext from '../../contexts/authContext'

function ServiceCard({ service, onEdit, onDelete }) {
  const { photo_url, category, title, price, description } = service
  const { token, userId } = useContext(AuthContext)

  const isUserOwner = userId === service.user_id

  return (
    <Card>
      <CardImage src={photo_url} alt={title} />
      <CardContent>
        <ServiceCategory>{category}</ServiceCategory>

        <ServiceTitle>{title}</ServiceTitle>
        <ServiceDescription>{description}</ServiceDescription>
        <ServicePrice>{`R$ ${price.replace('.', ',')}`}</ServicePrice>
        {token && isUserOwner && (
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

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ServiceCard
