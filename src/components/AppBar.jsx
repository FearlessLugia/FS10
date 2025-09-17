import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 100
  },
  text: {
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    padding: theme.fontSizes.subheading
  }
})

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab item='Repositories' to='/' />
    <AppBarTab item='Sign in' to='/signin' />
  </View>
}

export default AppBar