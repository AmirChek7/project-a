import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        width: '100%',
        flex: 1,
        padding: 22,
        flexDirection: 'column'
    },
    child1: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    child2: {
        flex: 7
    },

    // TITLE CONTAINER
    titleContainer: {
        width: '100%',

    },
    title: {
        color: '#4e3b31',
        fontSize: 52,
        fontFamily: 'Poppins_900Black',
    },
    description: {
        color: '#4b372c',
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
    },


    // INPUTS
    inputContainer: {
        width: '100%',
        rowGap: 20
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

    inputIcons: {
        position: 'absolute',
    },
    visibleIcon: {
        top: -22,
        left: 317,
    },
    lock: {
        paddingLeft: 10,
        paddingTop: 15
    },

    // BUTTONS
    buttonContainer: {
        marginTop: 50,
        height: 300,
        flexDirection: 'column',
    },
    errorContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 16,
        position: 'absolute',
        top: 18,
        left: -5
    },
    button_inner: {
        gap: 35
    },
    buttonFirst: {
        width: '100%',
        height: 50,
        marginTop: -14,
        borderRadius: 10,
        backgroundColor: '#b37a4f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSecond: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
})