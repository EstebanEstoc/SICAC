import * as GoogleSignIn from 'expo-google-app-auth'

const ANDROID_CLIENT_ID =
  '191982642574-87pa2aq2dm3phfuia7v5a00qjgohvtda.apps.googleusercontent.com'

const signIn = async () => {
  const result = await GoogleSignIn.logInAsync({
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ['profile', 'email']
  })
  return result
}

export default signIn
