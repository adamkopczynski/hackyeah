import React from 'react';

import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

import LessonItem from '../../components/learn/LessonItem/LessonItem';

class Learn extends React.Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent onPress={() => this.props.navigation.navigate('Quiz')}>
                        <Text>Quiz</Text>
                    </Button>
                </Header>
                <ScrollView style={{ flex: 1, padding: 20, paddingTop: 40, backgroundColor: '#E5EFFF' }} >
                    <LessonItem title='Lekcja 1' />
                    <LessonItem title='Lekcja 2' />
                    <LessonItem title='Lekcja 3' />
                    <LessonItem title='Lekcja 4' />
                </ScrollView>
            </View>
        );

    }
}

export default Learn;