import React from 'react';
import Tts from 'react-native-tts';
import { View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MdIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommandsJSON from '../../constants/commands.json';

import styles from './styles';

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
                    <View style={styles.item}>
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: 'https://image.shutterstock.com/image-vector/car-logo-icon-emblem-design-260nw-473088037.jpg' }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>
                                1. Zatrzymaj auto
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.item, { flexDirection: 'row-reverse' }]}>
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: 'https://image.shutterstock.com/image-vector/car-logo-icon-emblem-design-260nw-473088037.jpg' }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>
                                2. Załóż kamizelkę
                            </Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: 'https://image.shutterstock.com/image-vector/car-logo-icon-emblem-design-260nw-473088037.jpg' }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>
                                3. Ustaw trójkąt
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('Rescue')}>
                    <MdIcons name='voice' style={{ fontSize: 40 }} color='#8b93a0' />
                    <Text style={{ color: '#8b93a0', fontSize: 24, marginHorizontal: 20 }}>"Dalej"</Text>
                    <Ionicons name='ios-arrow-round-forward' style={{ fontSize: 55 }} color='#8b93a0' />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Prepare;