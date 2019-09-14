import React from 'react';
import Tts from 'react-native-tts';
import Geolocation from '@react-native-community/geolocation';
import CommandsJSON from '../../constants/commands.json';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
class Home extends React.Component {

    state = {
        position: null
    }

    componentDidMount() {
        this.hasLocationPermission();
        this.getLocation();
      var hours = new Date().getHours();
      if ((hours < 8) && (hours < 19)) {
        Tts.speak(CommandsJSON["Day"]["1"]);
        Tts.speak(CommandsJSON["Day"]["2"]);
        Tts.speak(CommandsJSON["Day"]["3"]);
        Tts.speak(CommandsJSON["Day"]["4"]);
      } else {
        Tts.speak(CommandsJSON["Night"]["1"]);
        Tts.speak(CommandsJSON["Night"]["2"]);
        Tts.speak(CommandsJSON["Night"]["3"]);
        Tts.speak(CommandsJSON["Night"]["4"]);
        Tts.speak(CommandsJSON["Night"]["5"]);
      }
    }

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

                        <TouchableOpacity style={styles.accidentBtn} onPress={() => navigation.navigate('Call')}>
                            <Text style={{ color: '#fff', fontSize: 30 }}>
                                WYPADEK
                            </Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        )
    }

    hasLocationPermission = async () => {
        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (hasPermission) return true;

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        }

        return false;
    }

    getWeather() {

        // Construct the API url to call
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.position.latitude + '&lon=' + this.state.position.longitude + '&appid=709d50934b037b56a091b604fc0f2de8&units=metric';


        // Call the API, and set the state of the weather forecast
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState((prevState, props) => ({
                    forecast: data
                }));
            })
    }

    getLocation = async () => {
        const hasLocationPermission = await this.hasLocationPermission();

        if (!hasLocationPermission) return;

        this.setState({ loading: true }, () => {
            Geolocation.getCurrentPosition(
                (position) => {

                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };

                    this.setState({ position: region, loading: false }, () => {
                        this.getWeather();
                    });

                },
                (error) => {
                    this.setState({ location: error, loading: false });
                    console.log(error);
                },
                { enableHighAccuracy: true, timeout: 15000, distanceFilter: 50, forceRequestLocation: true }
            );
        });
    }
}


export default Home;
