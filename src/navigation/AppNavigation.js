import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

//Screens 
import Home from '../screens/Home/Home';
import Map from '../screens/Map/Map';
import Rescue from '../screens/Rescue/Rescue';
import Call from '../screens/Call/Call';
import Prepare from '../screens/Prepare/Prepare';
import Learn from '../screens/Learn/Learn';
import Quiz from '../screens/Quiz/Quiz';

//Icons
import Pamietnik from '../assets/icons/pamietnik.png';
import Survival from '../assets/icons/survival_kit.png';
import Settings from '../assets/icons/settings.png';
import LearnIcon from '../assets/icons/first-aid-kit.png';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});

const LearnStack = createStackNavigator({
    Learn: {
        screen: Learn,
        navigationOptions: {
            header: null
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            header: null
        }
    }
});

const MapStack = createStackNavigator({
    Map: {
        screen: Map,
        navigationOptions: {
            header: null
        }
    }
});

const RescueStack = createStackNavigator({
    Rescue: {
        screen: Rescue
    },
    Prepare: {
        screen: Prepare
    },
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
    },
});

const TabNavigator = createBottomTabNavigator({
    Dziennik: HomeStack,
    Nauka: LearnStack,
    SurvivalKit: MapStack,
    Ustawienia: HomeStack
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let source;

            if (routeName === 'Dziennik') {
                source = Pamietnik;
            } else if (routeName === 'Nauka') {
                source = LearnIcon;
            }
            else if (routeName === 'SurvivalKit') {
                source = Survival;
            }
            else if (routeName === 'Ustawienia') {
                source = Settings;
            }

            // You can return any component that you like here!
            return <Image source={source} style={{ width: 25, height: 25 }} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#222',
        inactiveTintColor: 'gray',
    },
});


export default createAppContainer(createSwitchNavigator(
    {
        App: TabNavigator,
        Call: {
            screen: Call
        },
        RescueStack
    }
));