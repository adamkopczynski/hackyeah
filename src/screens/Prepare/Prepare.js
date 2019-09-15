import React from 'react';
import Tts from 'react-native-tts';
import { View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MdIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommandsJSON from '../../constants/commands.json';

import styles from './styles';

//images
import step1 from '../../assets/images/111.png';
import step2 from '../../assets/images/222.png';
import step3 from '../../assets/images/333.png';
class Prepare extends React.Component {

    componentDidMount() {
        Tts.speak(CommandsJSON["Day"]["1"]);
        Tts.speak(CommandsJSON["Day"]["2"]);
        Tts.speak(CommandsJSON["Day"]["3"]);
        Tts.speak(CommandsJSON["Day"]["4"]);
    }

    render() {

        const { navigation } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, paddingHorizontal: 15 }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Home')}>
                            <Ionicons name='ios-close' size={20} />
                            <Text style={styles.cancelText}>Anuluj</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={step1} style={{ flex: 1, marginVertical: 10 }} />
                    <Image source={step3} style={{ flex: 1, marginVertical: 10 }} />
                    <Image source={step2} style={{ flex: 1, marginVertical: 10 }} />
                </View>
                <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('Call')}>
                    <MdIcons name='voice' style={{ fontSize: 40 }} color='#8b93a0' />
                    <Text style={{ color: '#8b93a0', fontSize: 24, marginHorizontal: 20 }}>"Dalej"</Text>
                    <Ionicons name='ios-arrow-round-forward' style={{ fontSize: 55 }} color='#8b93a0' />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Prepare;