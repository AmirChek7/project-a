// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function Screen({ backgroundColor }: { backgroundColor: string }) {
//   useEffect(() => {
//     // В Expo StatusBar не имеет метода setBackgroundColor, вместо этого устанавливаем через props.
//   }, [backgroundColor]);

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <Text style={styles.text}>This is a dynamic screen with custom status bar color!</Text>
      
//       {/* Устанавливаем цвет панели состояния с помощью props */}
//       <StatusBar style="auto" backgroundColor={backgroundColor} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     color: '#000',
//   },
// });
