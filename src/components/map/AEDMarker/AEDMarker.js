import React from 'react';

import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Marker } from 'react-native-maps';

function AEDMarker(props) {

    const {
        location
    } = props;

    return (
        <Marker
            coordinate={{
                longitude: location.coordinates.lng,
                latitude: location.coordinates.lat
            }}>
            <View style={styles.marker}>
                <Text>AED</Text>
            </View>
        </Marker>
    )
}

const styles = StyleSheet.create({
    marker: {
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
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

export default AEDMarker