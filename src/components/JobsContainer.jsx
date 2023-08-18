import { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { SearchContainer } from '.'

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <SearchContainer />
      <h5>jobs info</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer
