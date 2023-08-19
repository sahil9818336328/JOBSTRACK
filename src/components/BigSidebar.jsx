import NavLinks from './NavLinks'
// import Logo from '../components/Logo'
import logo from '../assets/images/brand1.png'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useSelector } from 'react-redux'

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }`}
      >
        <div className='content'>
          <header>
            <img src={logo} alt='logo' className='s-brand' />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
