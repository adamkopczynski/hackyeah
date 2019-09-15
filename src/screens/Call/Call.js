import React from 'react';

import Tts from 'react-native-tts';
import Geolocation from '@react-native-community/geolocation';
import { View, Text, TouchableOpacity, Dimensions, PermissionsAndroid, StyleSheet, Platform } from 'react-native';
import MapView, {
    PROVIDER_GOOGLE
} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as variables from '../../theme/variables';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0122;

class Call extends React.Component {

    state = {
        region: null,
        latitudeDelta: LATITUDE_DELTA
    }

    componentDidMount() {
        Tts.speak('Rozpoczynam połączenie...');
        this.getLocation();
    }

    parseCoordinate = (number) => {

        const degrees = Math.floor(number);

        return degrees + '° ' + ((number - degrees) * 360).toFixed(4) + "'";
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

    getLocation = async () => {
        const hasLocationPermission = await this.hasLocationPermission();

        if (!hasLocationPermission) return;

        this.setState({ loading: true }, () => {
            Geolocation.getCurrentPosition(
                (position) => {

                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.latitudeDelta * ASPECT_RATIO,
                    };

                    this.setState({ region, loading: false });
                },
                (error) => {
                    this.setState({ location: error, loading: false });
                },
                { enableHighAccuracy: true, timeout: 15000, distanceFilter: 50, forceRequestLocation: true }
            );
        });
    }

    endCall = () => {
        this.props.navigation.navigate('Rescue');
    }

    render() {

        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.callingText}>Połączenie z 112...</Text>
                </View>
                <View style={{ flex: 2, width: '100%' }}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={true}
                        initialRegion={this.state.region} />
                    {
                        this.state.region && (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.coordsText}>{this.parseCoordinate(this.state.region.latitude)} N</Text>
                                <Text style={styles.coordsText}>{this.parseCoordinate(this.state.region.longitude)} E</Text>
                            </View>
                        )
                    }
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={this.endCall}>
                        <Ionicons name='ios-close' color='#fff' style={{ fontSize: 55 }} />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        backgroundColor: variables.dark_color
    },
    numberWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: variables.red_color,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    number: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    callingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    map: {
        height: 200,
        width: '100%',
        borderRadius: 10
    },
    cancelBtn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: variables.red_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coordsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Call;