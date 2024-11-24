import { View, Text, Pressable, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { StyleSheet } from 'react-native';
import { styles } from '@/styles/signup/signupStyles';
import React, { useState } from 'react'
import { Poppins_500Medium, Poppins_700Bold, Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { Sora_400Regular, Sora_500Medium, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Fontisto, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function RegisterScreen() {

  const [required, setRequired] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Write at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleSignIn = () => {
    router.push("/(routes)/verify")
  }

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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        onPress={() => router.push("/(routes)/onboarding")}
        style={{ paddingLeft: 25, paddingTop: 30 }}
      />
      <View style={styles.container}>

        {/* MAIN TITLE */}
        <View style={styles.child1}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Sign Up
            </Text>

            <Text style={styles.description}>
              Let's Get Started!
            </Text>
          </View>
        </View>

        {/* INPUTS */}
        <View style={styles.child2}>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder='Username'
                keyboardType='default'
                value={userInfo.name}
                onChangeText={(value) => setUserInfo({ ...userInfo, name: value })}
              />
              <AntDesign
                  style={{position: 'absolute', marginTop: 15, marginLeft: 12}}
                  name="user"
                  size={20}
                  color={"#A1A1A1"}
                />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder='Email'
                keyboardType='email-address'
                value={userInfo.email}
                onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
              />
              <Fontisto
                style={styles.errorContainer}
                name='email'
                size={20}
                color={"#a1a1a1"}
              />
              {required && (
                <View style={styles.errorContainer}>
                  <Entypo
                    name="cross" size={18} color={"red"}
                  />
                </View>
              )}
            </View>

            <View>
              <TextInput
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
                defaultValue=""
                placeholder="Password"
                onChangeText={handlePasswordValidation}
                style={styles.input}
              />
              <View style={styles.inputIcons}>
                <SimpleLineIcons
                  style={styles.lock}
                  name="lock"
                  size={20}
                  color={"#A1A1A1"}
                />

                <TouchableOpacity
                  style={styles.visibleIcon}
                  onPress={() => setPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={23}
                      color={"#747474"}
                    />
                  ) : (
                    <Ionicons name="eye-outline" size={23} color={"#747474"} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>



          {/* BUTTON SECTION */}
          <View style={styles.buttonContainer}>
            <View style={styles.button_inner}>
              <TouchableOpacity
                style={styles.buttonFirst}
                onPress={handleSignIn}
              >
                {buttonSpinner ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text
                    style={{ color: 'white', fontFamily: 'Sora_700Bold', fontSize: 18 }}
                  >
                    Continue
                  </Text>
                )}
              </TouchableOpacity>

              <View
                  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}
                >
                  <TouchableOpacity>
                    <FontAwesome name="google" size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome name="github" size={30} />
                  </TouchableOpacity>
                </View>

              <TouchableOpacity style={styles.buttonSecond} onPress={() => router.push("/(routes)/login")}>
                <Text>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}