import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { Marker } from 'react-native-maps';

function OrlenMarker(props) {

    const {
        location
    } = props;

    return (
        <Marker
            coordinate={{
                longitude: location.lng,
                latitude: location.lat
            }}>
            <View style={styles.marker}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>ORLEN</Text>
            </View>
        </Marker>
    )
}

const styles = StyleSheet.create({
    marker: {
        backgroundColor: 'red',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#fff',
        padding: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'
    }
})

export default OrlenMarker