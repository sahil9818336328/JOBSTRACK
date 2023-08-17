import Wrapper from '../assets/wrappers/ErrorPage'
import notFound from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={notFound} alt='not found' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can&apos;t seem to find the page you&apos;ve been looking for.</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
