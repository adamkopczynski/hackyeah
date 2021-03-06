import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import Icon from '../../components/common/Icon';

import DoctorIcon from '../../assets/icons/doctor.png';
import AidKidIcon from '../../assets/icons/first-aid-kit.png';
import HandIcon from '../../assets/icons/hand.png';
import PhoneIcon from '../../assets/icons/phone-call.png';
import PinIcon from '../../assets/icons/map.png';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
class Home extends React.Component {

    state = {
        position: null
    }

    componentDidMount() {
        this.hasLocationPermission();
        this.getLocation();

    }

    render() {

        const { navigation } = this.props;



        return (
            <View style={styles.page}>
                <SafeAreaView style={{ flex: 1 }}>

                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Prepare')}>
                            <Icon source={HandIcon} style={{ marginHorizontal: 20 }} />
                            <Text style={styles.buttonText}>
                                Opanuj stres
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Icon source={DoctorIcon} style={{ marginHorizontal: 20 }} />
                            <Text style={styles.buttonText}>
                                Bohaterowie ORLEN
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
                            <Icon source={PinIcon} style={{ marginHorizontal: 20 }} />
                            <Text style={styles.buttonText}>
                                Mapa NFZ i AED
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rescue')}>
                            <Icon source={AidKidIcon} style={{ marginHorizontal: 20 }} />
                            <Text style={styles.buttonText}>
                                Pierwsza pomoc
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.callButton]} onPress={() => navigation.navigate('Call')}>
                            <Icon source={PhoneIcon} style={{ marginHorizontal: 20 }} />
                            <Text style={[styles.buttonText, styles.callButtonText]}>
                                Zadzwoń 112
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.accidentBtn} onPress={() => navigation.navigate('Prepare')}>
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
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.position.latitude + '&lon=' + this.state.position.longitude + '&units=metric&appid=709d50934b037b56a091b604fc0f2de8';


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

                    this.setState({ position, loading: false }, () => {
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
