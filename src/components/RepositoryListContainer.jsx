import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const navigate = useNavigate()

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return (
          <Pressable key={item.id} onPress={() => navigate(`/repo/${item.id}`)}>
            <RepositoryItem item={item} showButton={false} />
          </Pressable>
        )
      }}
    />
  )
}