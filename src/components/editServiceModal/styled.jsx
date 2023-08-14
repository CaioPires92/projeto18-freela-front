import styled from 'styled-components'

export const IsActiveButton = styled.button`
  background-color: ${props => (props.isActive ? 'green' : 'red')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`
