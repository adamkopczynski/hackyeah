import { StyleSheet } from 'react-native';
import * as variables from '../../theme/variables';

const styles = StyleSheet.create({
    accidentBtn: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: variables.red_color,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: '#fff',
        shadowOffset: { width: 4, height: 4, },
        shadowColor: 'black',
        shadowOpacity: 0.15
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    button: {
        width: '100%',
        height: 70,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 4, height: 4, },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        flexDirection: 'row'
    },
    page: {
        flex: 1,
        backgroundColor: variables.light_color
    },
    callButton: {
        borderWidth: 2,
        borderColor: variables.red_color
    },
    buttonText: {
        fontSize: 26,
        color: variables.dark_color,
        flex: 1,
        textAlign: 'center'
    },
    callButtonText: {
        color: variables.red_color,
        fontWeight: 'bold'
    }
})

export default styles;