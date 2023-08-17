import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Profile,
  AddJobs,
  AllJobs,
  SharedLayout,
  Stats,
} from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJobs />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
