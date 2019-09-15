import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function QuizOption(props) {

    const { selected, value, onSelect } = props;

    return (
        <TouchableOpacity style={[styles.option, selected && styles.selectedOption]} onPress={onSelect}>
            <View style={[styles.radio, selected && styles.selectedRadio]} />
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    option: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        height: 70,
        marginBottom: 10
    },
    selectedOption: {
        backgroundColor: 'rgba(0,0,0, .1)'
    },
    radio: {
        borderRadius: 10,
        width: 20,
        height: 20,
        borderWidth: 3,
        borderColor: '#313740',
        marginRight: 15
    },
    selectedRadio: {
        backgroundColor: '#313740'
    }
})

export default QuizOption;