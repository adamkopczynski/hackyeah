import React from 'react';

import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Container, Header, Body, Title, Right, Text, Button, Radio } from 'native-base';
import QuizOption from '../../components/quiz/QuizOption/QuizOption';

import questions from '../../constants/questions';


class Quiz extends React.Component {

    state = {
        timer: 0,
        questionNumber: 0,
        currentQuestion: questions[0],
        selected: null,
        correctAnswersCount: 0
    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer = () => {
        setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000);
    }

    addZero = (value) => {

        if (value > 10)
            return value.toString();

        return '0' + value;
    }

    formatTimer = (time) => {

        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;

        return this.addZero(minutes) + ':' + this.addZero(seconds);
    }

    selectOption = value => this.setState({ selected: value });

    nextQuestion = () => {

        if (!this.state.selected) {
            Alert.alert('Musisz wybrac odpowiedź');
        }
        else if (this.state.questionNumber + 1 >= questions.length) {
            Alert.alert('Twój wynik: ' + this.state.correctAnswersCount);
        }
        else {

            if (this.state.selected === this.state.currentQuestion.Answer) {
                this.setState({
                    correctAnswersCount: this.state.correctAnswersCount + 1
                })
            }

            this.setState({
                questionNumber: this.state.questionNumber + 1,
                currentQuestion: questions[this.state.questionNumber + 1],
                selected: null
            })
        }
    }

    render() {

        const { timer, questionNumber, currentQuestion, selected } = this.state;

        return (
            <Container style={{ backgroundColor: '#E5EFFF' }}>
                <Header transparent>
                    <Body>
                        <Title>Quiz</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Anuluj</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex: 1 }}>
                    <View style={styles.timeWrapper}>
                        <Text>{this.formatTimer(timer)}</Text>
                    </View>
                    <ScrollView style={styles.card}>
                        <Text style={{ fontWeight: 'bold' }}>Pytanie {questionNumber + 1}</Text>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>{currentQuestion.text}</Text>
                        <QuizOption value={currentQuestion.A} selected={selected === 'A'} onSelect={() => this.selectOption('A')} />
                        <QuizOption value={currentQuestion.B} selected={selected === 'B'} onSelect={() => this.selectOption('B')} />
                        <QuizOption value={currentQuestion.C} selected={selected === 'C'} onSelect={() => this.selectOption('C')} />
                        <QuizOption value={currentQuestion.D} selected={selected === 'D'} onSelect={() => this.selectOption('D')} />
                        <QuizOption value={currentQuestion.E} selected={selected === 'E'} onSelect={() => this.selectOption('E')} />
                        <Button style={{ marginTop: 10 }} onPress={() => this.nextQuestion()}>
                            <Text>Dalej</Text>
                        </Button>
                    </ScrollView>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    timeWrapper: {
        height: 40,
        alignItems: 'center'
    },
    card: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        flex: 1,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        padding: 20
    }
})

export default Quiz;