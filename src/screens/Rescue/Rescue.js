import React from 'react';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

import { View, Text, TouchableOpacity } from 'react-native';

class Rescue extends React.Component {

    constructor() {

        super();

        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    componentDidMount() {
        Tts.speak('Przystąp do akcji ratunkowej');
        Tts.speak('Sterowanie aplikacją odbywa się poprzez komendy głosowe');
        Voice.start('pl-PL');
    }

    onSpeechStartHandler(e) {
        console.log(e);
    }

    onSpeechEndHandler(e) {
        console.log(e);
    }

    onSpeechResultsHandler(e) {

        const text = typeof e.value === 'string' ? e.value.toLowerCase() : '';

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