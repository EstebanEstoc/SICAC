import React from 'react'
import { GoogleSignin, statusCodes } from 'react-native-google-signin'

export const WEB_CLIENT_ID =
  '418441773673-8fuj39av1tro7vpd07jvdo87ihahtiib.apps.googleusercontent.com'

export const GoogleConfigure = () => {
  GoogleSignin.configure({
    scopes: [],
    webClientId: WEB_CLIENT_ID,
    offlineAccess: true,
    forceConsentPrompt: true
  })
}

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    return userInfo
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('canceled')
      throw new Error('Login Canceled')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('already in progress')
      throw new Error('Login already in progress')
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play service not available')
      throw new Error('Google Play service not available')
    } else {
      console.log(error.message)
      throw new Error(error.message)
    }
  }
}

export const signInSilently = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently()
    return userInfo
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      return false
    } else {
      return false
    }
  }
}

export const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
  } catch (error) {
    console.error(error)
  }
}
