import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RegisterScreen from '@/screens/auth/RegisterScreen'

export default function index() {
  return (
    <SafeAreaProvider>
        <RegisterScreen />
    </SafeAreaProvider>
  )
}