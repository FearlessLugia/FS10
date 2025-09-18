import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client/react'
import { useNavigate } from 'react-router-native'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  return () => {
    // remove access token from the storage
    authStorage.removeAccessToken()

    // reset Apollo Client's store
    apolloClient.resetStore()
  }
}

export default useSignOut