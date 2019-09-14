import React from 'react';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

import { View, Text, TouchableOpacity } from 'react-native';

import steps_json from '../../constants/rescue_steps.json';

class Rescue extends React.Component {

    steps = steps_json;

    state = {
        currentStep: steps["1"]
    }

    constructor() {

        super();

        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    componentDidMount() {
        Tts.speak('Przystąp do akcji ratunkowej');
        Tts.speak('Sterowanie aplikacją odbywa się poprzez komendy głosowe');
        Tts.speak('Powiedz dalej aby przejść do następnego kroku lub powtórz, aby powtórzyć aktualny.');
        Voice.start('pl-PL');
    }

    onSpeechStartHandler(e) {
        console.log(e);
    }

    onSpeechEndHandler(e) {
        console.log(e);
    }

    onSpeechResultsHandler(e) {

        const text = typeof e.value[0] === 'string' ? e.value[0].toLowerCase() : '';

        const answers = Object.keys(this.state.currentStep.options);

        if (text.includes('powtórz')) {
            this.repeatStep()
        }

        for (let answer in answers) {
            if (text.includes(answer)) {
                this.nextStep(answer)
            }
        }
    }

    speakCurrentStep = () => {

        if (typeof this.state.currentStep.text === 'Array') {

            for (let text in this.state.currentStep.text) {
                Tts.speak(text);
            }
        }
        else {
            Tts.speak(this.state.currentStep.text);
        }
    }

    repeatStep = () => {

        if (this.state.currentStep !== null) {
            this.speakCurrentStep();
        }
    }

    nextStep = (step) => {

        if (this.steps[step]) {
            this.setState({ currentStep: this.steps[step] }), () => {
                this.speakCurrentStep();
            };
        }
        else {
            this.repeatStep();
        }
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