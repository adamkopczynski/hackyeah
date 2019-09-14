import React from 'react';
import Tts from 'react-native-tts';

import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Home extends React.Component {

    componentDidMount() {
        Tts.setDefaultLanguage('pl-PL');
        Tts.speak('Cześć, świecie!');
    }

    render() {

        const { navigation } = this.props;



        return (
            <SafeAreaView style={styles.wrapper}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
                    <Text style={{ color: '#fff', fontSize: 30 }}>
                        ALERT
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center'
    }
})


export default Home;
