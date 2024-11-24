import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import VerifyAccountScreen from '@/screens/auth/VerifyAccountScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function VerifyAccount() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <VerifyAccountScreen />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}