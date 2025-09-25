import RepositoryItem from './RepositoryItem'
import useSingleRepository from '../hooks/useSingleRepository'
import { useParams } from 'react-router-native'

const SingleRepository = () => {
  const { id } = useParams()

  const { repository, loading } = useSingleRepository({ id })
  if (loading) return null

  return (
    <RepositoryItem item={repository} showButton />
  )
}

export default SingleRepository