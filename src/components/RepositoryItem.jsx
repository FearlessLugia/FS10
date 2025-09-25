import { View, Image, StyleSheet, Pressable, Linking } from 'react-native'
import Text from './Text'
import FooterItem from './FooterItem'
import theme from '../theme'
import { useParams } from 'react-router-native'

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
  },

  button: {
    backgroundColor: theme.colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 20
  },

  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
  }
})

const RepositoryItem = ({ item, showButton }) => {
  const params = useParams()

  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />

        <View style={styles.description}>
          <Text testID='fullName' fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
          <Text testID='description' fontSize='subheading'>{item.description}</Text>
          <Text testID='language' style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <FooterItem testID='stargazersCount' name='Stars' value={item.stargazersCount} />
        <FooterItem testID='forksCount' name='Forks' value={item.forksCount} />
        <FooterItem testID='reviewCount' name='Reviews' value={item.reviewCount} />
        <FooterItem testID='ratingAverage' name='Rating' value={item.ratingAverage} />
      </View>

      {showButton && <View>
        <Pressable
          style={styles.button}
          onPress={() => {
            Linking.openURL(item.url);
          }}
        >
          <Text style={styles.buttonText}>Open in GitHub</Text>
        </Pressable>
      </View>}
    </View>
  )
}


export default RepositoryItem