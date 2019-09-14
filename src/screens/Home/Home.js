import React from 'react';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
class Home extends React.Component {

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.page}>
                <SafeAreaView style={{ flex: 1 }}>

                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.button}>
                            <Text>
                                OPTION
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text>
                                OPTION
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text>
                                OPTION
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.accidentBtn} onPress={() => navigation.navigate('Map')}>
                            <Text style={{ color: '#fff', fontSize: 30 }}>
                                WYPADEK
                            </Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        )
    }
}

export default Home;