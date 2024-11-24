import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Poppins_500Medium, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';
import { Sora_400Regular, Sora_500Medium, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { TextInput } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ForgotPassword() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_900Black,
    Poppins_500Medium,
    Sora_700Bold,
    Sora_400Regular,
    Sora_500Medium,
    Sora_800ExtraBold,
  });
  if (!fontsLoaded && !fontError) {
    return null
  }

  const { width } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text
            style={{ color: '#4e3b31', fontSize: 44, marginBottom: 30 }}
          >
            Reset Password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            defaultValue=""
            placeholder="Password"
          />

          <SimpleLineIcons
            style={{position: 'absolute', top: 13, left: 10}}
            name="lock"
            size={20}
            color={"#A1A1A1"}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={{ color: 'white', fontFamily: 'Sora_500Medium', fontSize: 14, }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    height: 200,
    width: '100%',
    padding: 20
  },
  button: {
    backgroundColor: '#b37a4f',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    bottom: -100
  },
  title: {
    justifyContent: 'center',
    marginTop: -60,
    alignItems: 'center'
  },
  input: {
    height: 55,
    backgroundColor: '#faf6f3',
    borderColor: '#4e3b31',
    borderWidth: 1,
    padding: 16,
    paddingLeft: 40,

    borderRadius: 8,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    color: "#4e3b31",
    fontFamily: "Poppins_500Medium"
  },
  inputContainer: {
    marginBottom: -70,
    marginTop: 20
  }
})