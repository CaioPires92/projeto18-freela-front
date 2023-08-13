import Logo from '../Logo'
import { useContext } from 'react'
import { HeaderContainer, UserInfo } from './styled'
import AuthContext from '../../contexts/authContext'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { userName, setUserName } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setUserName(null)
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <Logo>Get Samurais</Logo>
      <UserInfo>
        {userName ? (
          <>
            <FaUserCircle size={24} style={{ marginRight: '8px' }} />
            {userName}
            <FaSignOutAlt
              size={24}
              style={{ marginLeft: '8px', cursor: 'pointer' }}
              onClick={handleLogout}
            />
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </UserInfo>
    </HeaderContainer>
  )
}

export default Header
