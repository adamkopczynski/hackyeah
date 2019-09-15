import { StyleSheet } from 'react-native';
import * as variables from '../../theme/variables';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.light_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    button: {
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 25,
        backgroundColor: variables.red_color,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;