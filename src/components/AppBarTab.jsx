import { StyleSheet, Text } from 'react-native'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    padding: theme.fontSizes.subheading
  }
})
const AppBarTab = ({ item, to }) => (
  <Link to={to}>
    <Text style={styles.text}>{item}</Text>
  </Link>
)

export default AppBarTab