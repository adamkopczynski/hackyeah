import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Platform,
    ToastAndroid,
    PermissionsAndroid
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import MapView, {
    ProviderPropType,
    PROVIDER_GOOGLE
} from 'react-native-maps';

import AEDMarker from '../../components/map/AEDMarker/AEDMarker';
import OrlenMarker from '../../components/map/OrlenMarker/OrlenMarker';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0122;

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: null,
            latitudeDelta: LATITUDE_DELTA,
            zoom: 5,
            aedDevices: [{
                location: {
                    longitude: 21.1108,
                    latitude: 52.2369
                }
            }],
            stations: []
        };
    }

    componentDidMount() {
        this.getLocation();
    }

    fetchStations = (location) => {
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1500&keyword=orlen&key=AIzaSyBf12FMTxq11AplW26JieM4NmKOnntyqTQ`)
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    stations: json.results
                })
            })
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

                    this.setState({ location: position, region, loading: false });
                    this.fetchStations(position.coords);
                },
                (error) => {
                    this.setState({ location: error, loading: false });
                    console.log(error);
                },
                { enableHighAccuracy: true, timeout: 15000, distanceFilter: 50, forceRequestLocation: true }
            );
        });
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {

        const { aedDevices, stations } = this.state;

        return (
            <View style={styles.container}>
                {
                    !this.state.region ?
                        <Text>Loading...</Text> :
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            initialRegion={this.state.region}
                            showsMyLocationButton={true}
                            showsUserLocation={true}
                            zoomControlEnabled
                        >
                            {aedDevices.map(device => <AEDMarker location={device.location} />)}
                            {stations.map(station => <OrlenMarker location={station.geometry.location} />)}
                        </MapView>
                }

            </View>
        );
    }
}

Map.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    mapControl: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default Map;