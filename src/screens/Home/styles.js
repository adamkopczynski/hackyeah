import { StyleSheet } from 'react-native';
import * as variables from '../../theme/variables';

const styles = StyleSheet.create({
    accidentBtn: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: variables.red_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    button: {
        width: '100%',
        height: 100,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    page: {
        flex: 1,
        backgroundColor: variables.light_color
    }
})

export default styles;