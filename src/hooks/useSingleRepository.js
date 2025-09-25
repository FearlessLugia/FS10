import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORY } from '../graphql/queries'

const useSingleRepository = ({ id }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  })

  return {
    repository: data?.repository,
    error,
    loading
  }
}

export default useSingleRepository