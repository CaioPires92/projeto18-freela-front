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
  DeleteButton
} from './styled'

function ServiceCard({ service, onEdit, onDelete }) {
  const { image, category, name, price } = service

  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardContent>
        <ServiceCategory>{category}</ServiceCategory>
        <ServiceTitle>{name}</ServiceTitle>
        <ServicePrice>{price}</ServicePrice>
        <ButtonContainer>
          <EditButton onClick={() => onEdit(service)}>Edit</EditButton>
          <DeleteButton onClick={() => onDelete(service.id)}>
            Delete
          </DeleteButton>
        </ButtonContainer>
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
