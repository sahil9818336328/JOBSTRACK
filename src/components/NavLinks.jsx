import links from '../utils/links'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map(({ text, path, id, icon: Icon }) => {
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link'
            }}
            onClick={toggleSidebar}
          >
            <span className='icon'> {<Icon />} </span> {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
