import React from 'react';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

import { View, Text, TouchableOpacity } from 'react-native';

import steps from '../../constants/rescue_steps';

class Rescue extends React.Component {

    state = {
        currentStep: 0
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
        this.speakCurrentStep();
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

        console.log(e)

        const currentStep = steps[this.state.currentStep];
        // const answers = Object.keys(currentStep.options);

        // console.log(answers.includes('dalej'))

        // if (text.includes('powtórz')) {
        //     this.repeatStep()
        // }

        // if (text.includes('dalej') && answers.includes('dalej')) {
        //     this.nextStep(currentStep.options['dalej'])
        // }

        // if (text.includes('tak') && answers.includes('tak')) {
        //     this.nextStep(currentStep.options['tak'])
        // }

        // if (text.includes('nie') && answers.includes('nie')) {
        //     this.nextStep(currentStep.options['nie'])
        // }

    }

    speakCurrentStep = () => {

        if (typeof steps[this.state.currentStep].text !== 'string') {

            for (let i = 0; i < steps[this.state.currentStep].text.length; i++) {
                Tts.speak(steps[this.state.currentStep].text[i]);
            }
        }
        else {
            Tts.speak(steps[this.state.currentStep].text);
        }
    }

    repeatStep = () => {

        if (this.state.currentStep !== null) {
            this.speakCurrentStep();
        }
    }

    nextStep = () => {

        this.setState({ currentStep: this.state.currentStep + 1 }, () => {
            this.speakCurrentStep();
        });
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.nextStep}>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.repeatStep}>
                    <Text>Repeat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Rescue;