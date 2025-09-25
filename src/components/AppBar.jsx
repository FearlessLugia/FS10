import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'
import { useQuery } from '@apollo/client/react'
import { ME } from '../graphql/queries'
import useSignOut from '../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 100
  },
  tab: {
    alignItems: 'center'
  }
})

const AppBar = () => {
  const { data, error, loading } = useQuery(ME)

  const signOut = useSignOut()

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tab}>
        <AppBarTab item='Repositories' to='/' />
        {!data?.me && <AppBarTab item='Sign in' to='/signin' />}
        {data?.me && <AppBarTab item='Sign out' onPress={signOut} />}
      </ScrollView>
    </View>
  )
}

export default AppBar