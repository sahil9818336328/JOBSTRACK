import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobstrack logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sunt
            voluptas quo nostrum veniam vitae cumque, nam laudantium voluptatem
            eum cum quis ut. Reprehenderit recusandae fugiat autem animi
            mollitia blanditiis.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
