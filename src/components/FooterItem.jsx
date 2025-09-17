import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    gap: 8
  }
})

const FooterItem = ({ name, value }) => {
  const formatValue = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k'
    }
    return value
  }

  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{formatValue(value)}</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default FooterItem