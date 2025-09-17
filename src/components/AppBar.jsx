import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

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

const AppBar = () => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tab}>
      <AppBarTab item='Repositories' to='/' />
      <AppBarTab item='Sign in' to='/signin' />
    </ScrollView>
  </View>
)

export default AppBar