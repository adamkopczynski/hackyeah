import React from 'react';
import Voice from 'react-native-voice';

import { View, Text, TouchableOpacity } from 'react-native';

class Rescue extends React.Component {

    constructor() {

        super();

        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    componentDidMount() {
        Voice.start('pl-PL');
    }

    onSpeechStartHandler(e) {
        console.log(e);
    }

    onSpeechEndHandler(e) {
        console.log(e);
    }

    onSpeechResultsHandler(e) {

        const text = e.value && e.value.toLowerCase();

        if (text.includes('dalej')) {
            this.nextStep()
        }
        else if (text.includes('powtórz')) {

        }
        else if (text.includes('stop')) {

        }
        else if (text.includes('tak')) {

        }
        else if (text.includes('nie')) {

        }
    }

    nextStep = () => {
        console.log('next')
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.onStartButtonPress}>
                    <Text>Start</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Rescue;