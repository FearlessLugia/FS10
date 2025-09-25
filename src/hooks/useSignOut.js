import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client/react'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  return () => {
    // remove access token from the storage
    authStorage.removeAccessToken()

    // reset Apollo Client's store
    apolloClient.resetStore()
  }
}

export default useSignOut