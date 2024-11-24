import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_900Black, Poppins_900Black_Italic, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'
import { styles } from '@/styles/onboarding/onboarding'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Sora_700Bold } from '@expo-google-fonts/sora'

export default function OnBoardingScreen() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_900Black_Italic,
    Poppins_900Black,
    Poppins_800ExtraBold,
    Sora_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.child1}>
        <View style={styles.containerImage}>
          <Image source={require('./images/pp.png')} style={styles.imagestyles} />
          {/* <Image source={require('./images/ice-coffee.png')} style={styles.imagestyles} /> */}
        </View>
      </View>
      <View style={styles.child2}>
        <View style={styles.child2Content}>
          <Text style={styles.heading}>Welcome to CoffeeShop!</Text>
          <Text style={styles.description}>Where quality meets every sip. Elevating coffee excellence, One cup at a time.</Text>
        </View>

        <View style={styles.child2BtnContainer}>
          <Pressable style={styles.stylesButton} onPress={() => router.push("/(routes)/register")}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <Pressable style={styles.stylesButton1} onPress={() => router.push("/(routes)/login")}>
            <Text style={styles.buttonText1}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
};