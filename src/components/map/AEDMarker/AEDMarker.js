import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { Marker } from 'react-native-maps';

function AEDMarker(props) {

    const {
        location
    } = props;

    return (
        <Marker
            coordinate={{
                longitude: location.longitude,
                latitude: location.latitude
            }}>
            <View style={styles.marker}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>AED</Text>
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
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#fff',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'
    }
})

export default AEDMarker