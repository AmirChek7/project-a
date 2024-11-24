import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LoginScreen from '@/screens/auth/LoginScreen'

export default function Login() {
  return (
    <SafeAreaProvider>
        <LoginScreen />
    </SafeAreaProvider>
  )
}