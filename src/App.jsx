import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Landing, Error, Dashboard, Register } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: 'landing',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: 'Register',
    element: <Register />,
    errorElement: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
