import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"

export const styles = StyleSheet.create({
    // Styles Main Container
    container: {
        // backgroundColor: '#FFE6CA',
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 16,
    },
    // Styles First Container
    child1: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    child2Content: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    heading: {
        fontFamily: 'Poppins_900Black',
        fontSize: 44,
        color: '#4e3b31',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: '300',
        color: '#4b372c',
        textAlign: 'center',
        lineHeight: 24,
        width: 350,
    },


    // Styles Second Container 
    child2: {
        flex: 5,
        gap: 70,
    },
    child2BtnContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 21,
        width: '100%',
        gap: 16,
        marginBottom: 34,
    },
    stylesButton: {
        width: '100%',
        height: 58,
        borderRadius: 40,
        backgroundColor: '#b37a4f',
        alignItems: 'center',
        justifyContent: 'center',
        
        
        // backgroundColor: '#5c261d',
        // backgroundColor: '#8b5e3c',
        // backgroundColor: '#42181a',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
    },
    stylesButton1: {
        width: '100%',
        height: 58,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf6f3',


        // backgroundColor: '#f4ece6',
        // backgroundColor: '#eee1d8',
    },
    buttonText1: {
        fontSize: 18,
        color: '#4e3b31',
        fontWeight: '500'
    },

    // Image
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagestyles: {
        width: 390,
        height: 390,
    },
});