import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import FooterItem from './FooterItem'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white
  },

  imageContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 20
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  },

  description: {
    flexDirection: 'column',
    gap: 10,
    flexShrink: 1
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  }
})

const RepositoryItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />

      <View style={styles.description}>
        <Text testID="fullName" fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
        <Text testID="description" fontSize='subheading'>{item.description}</Text>
        <Text testID="language" style={styles.language}>{item.language}</Text>
      </View>
    </View>

    <View style={styles.footer}>
      <FooterItem testID="stargazersCount" name='Stars' value={item.stargazersCount} />
      <FooterItem testID="forksCount" name='Forks' value={item.forksCount} />
      <FooterItem testID="reviewCount" name='Reviews' value={item.reviewCount} />
      <FooterItem testID="ratingAverage" name='Rating' value={item.ratingAverage} />
    </View>
  </View>
)


export default RepositoryItem