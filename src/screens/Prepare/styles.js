import { StyleSheet } from 'react-native';
import * as variables from '../../theme/variables';

const styles = StyleSheet.create({
    cancelButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: variables.dark_color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 100,
        borderRadius: 5
    },
    cancelText: {
        color: variables.dark_color,
        fontSize: 16,
        marginLeft: 5
    },
    header: {
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: variables.light_color
    },
    item: {
        flex: 1,
        flexDirection: 'row'
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})

export default styles;