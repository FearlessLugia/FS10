import Text from './Text'
import { useFormik } from 'formik'
import { Pressable, TextInput, View, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    gap: 20,
    backgroundColor: theme.colors.white
  },

  textInput: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    height: 40,
    paddingHorizontal: 15
  },

  button: {
    backgroundColor: theme.colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
  }
})

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn