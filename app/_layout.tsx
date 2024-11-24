import { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import OnBoarding from "./(routes)/onboarding";
import Login from "./(routes)/login";
import ForgotPassword from "./(routes)/forgot-password";
import VerifyAccount from "./(routes)/verify";

export default function RootLayout() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <View>aaa</View>
      ) : (
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/login/index" />
          <Stack.Screen name="(routes)/register/index" />
          <Stack.Screen name="(routes)/forgot-password/index" />
          <Stack.Screen name="(routes)/verify/index" />
        </Stack>
      )}
    </>
  );
}