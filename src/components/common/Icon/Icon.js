import React from 'react';
import { Image } from 'react-native';

function Icon(props) {

    const { source, style } = props;

    return (
        <Image source={source} style={[{ width: 30, height: 30 }, style]} />
    )
}

export default Icon;