import React from 'react'
import OnBoardingScreen from "@/screens/OnBoardingScreen"
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function OnBoarding() {
  return (
    <SafeAreaProvider>
      <OnBoardingScreen />
    </SafeAreaProvider>
  )
}