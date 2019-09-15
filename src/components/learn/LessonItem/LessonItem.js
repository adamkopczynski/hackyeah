import React from 'react';

import { View, Image, Text } from 'react-native';

function LessonItem(props) {

    return (
        <View
            style={{
                width: '100%',
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginBottom: 10,
                shadowOffset: { width: 4, height: 4, },
                shadowColor: 'black',
                shadowOpacity: 0.15
            }}>
            <View style={{ flex: 1, height: '100%', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 20, color: '#222' }}>Nazwa lekcji</Text>
                <Text style={{ fontSize: 14, color: '#ccc' }}>10 pkt</Text>
            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <Image source={{ uri: 'https://stacon.pl/wp-content/uploads/2017/08/logo-orlen2.png' }} style={{ width: null, height: null, flex: 1 }} />
            </View>
        </View>
    )
}

export default LessonItem;