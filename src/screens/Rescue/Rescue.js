import React from 'react';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import steps from '../../constants/rescue_steps';
import styles from './styles';

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

        for (let i = 1; i < 4; i++) {
            setTimeout(() => {
                this.nextStep();
            }, i * 5000 + 12000)
        }
    }

    onSpeechStartHandler(e) {
        console.log(e);
    }

    onSpeechEndHandler(e) {
        console.log(e);
    }

    onSpeechResultsHandler(e) {

        const text = typeof e.value[0] === 'string' ? e.value[0].toLowerCase() : '';

        const currentStep = steps[this.state.currentStep];

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

        const stepImage = steps[this.state.currentStep].image;
        const options = steps[this.state.currentStep].options;

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, borderRadius: 10, margin: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    {stepImage && <Image source={stepImage} />}
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        {options && options.map(option => <Image source={option} style={{ flex: 1 }} />)}
                    </View>
                </View>
                <View style={{ marginBottom: 20, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
                        <Ionicons name='ios-close' size={30} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.repeatStep} style={styles.button}>
                        <Ionicons name='ios-repeat' size={30} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.nextStep} style={styles.button}>
                        <Ionicons name='ios-arrow-round-forward' size={30} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Rescue;