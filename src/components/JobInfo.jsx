import Wrapper from '../assets/wrappers/JobInfo'

// eslint-disable-next-line react/prop-types
const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  )
}

export default JobInfo
