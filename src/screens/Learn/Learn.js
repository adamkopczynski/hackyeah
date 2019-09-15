import React from 'react';

import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

import LessonItem from '../../components/learn/LessonItem/LessonItem';

class Learn extends React.Component {

    render() {

        return (
            <ScrollView style={{ flex: 1, padding: 20, paddingTop: 40, backgroundColor: '#E5EFFF' }} >
                <LessonItem />
                <LessonItem />
                <LessonItem />
                <LessonItem />
            </ScrollView>
        );

    }
}

export default Learn;