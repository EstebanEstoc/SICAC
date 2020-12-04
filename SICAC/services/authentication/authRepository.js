const editJsonFile = require('edit-json-file')

// For providers like google, register === signIn
const register = (authData, provider) => {
  switch (provider) {
    case 'GoogleAPI':
      if (authData.type === 'success') {
        try {
          GoogleAPIRegister(authData)
          return true
        } catch (e) {
          console.log(e)
          return false
        }
      } else {
        return false
      }

    case 'GoogleSignIn':
      try {
        GoogleSignInRegister(authData)
        return false
      } catch (e) {
        console.log(e)
        return false
      }
    default:
      return false
  }
}

const GoogleAPIRegister = authData => {
  const userFile = editJsonFile(`${__dirname}/../../data/user.json`)
  userFile.set('providerToken', authData.accessToken)
  userFile.set('id', authData.user.id)
  userFile.set('name', authData.user.name)
  userFile.set('email', authData.user.email)
  userFile.save()
}

const GoogleSignInRegister = authData => {
  throw new Error(
    'Google Sign currently not implemented. Expo app issue fired on implementation'
  )
}

export default register
