import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
    // Other options
  })

  return {
    repositories: data?.repositories,
    error,
    loading
  }
}

export default useRepositories