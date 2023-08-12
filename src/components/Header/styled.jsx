import { FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  width: 100%;
  padding: 20px 10px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 15px;
    font-weight: bolder;
    font-family: 'Arial', sans-serif;

    &:hover {
      color: #616060;
    }
  }
`
export const UserIcon = styled(FaUserCircle)`
  font-size: 24px;
  margin-right: 8px;
`
