import * as yup from 'yup'

import Text from './Text'
import { useFormik } from 'formik'
import { Pressable, TextInput, View, StyleSheet } from 'react-native'
import theme from '../theme'
import useSignIn from '../hooks/useSignIn'

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

  textInputError: {
    borderColor: theme.colors.error
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
  },

  errorText: {
    color: theme.colors.error
  }
})

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          formik.touched.username && formik.errors.username && styles.textInputError
        ]}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        error={formik.touched.username && formik.errors.username}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}

      <TextInput
        style={[
          styles.textInput,
          formik.touched.password && formik.errors.password && styles.textInputError
        ]}
        placeholder='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        error={formik.touched.password && formik.errors.password}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}

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
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { authenticate } = await signIn({ username, password })
      console.log('accessToken', authenticate.accessToken)
    } catch (e) {
      console.log(e)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn