import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user)

  if (!user) {
    return <Navigate to='/landing' />
  }

  return children
}

export default ProtectedRoute
