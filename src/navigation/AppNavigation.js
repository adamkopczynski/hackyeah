import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens 
import Home from '../screens/Home/Home';
import Map from '../screens/Map/Map';
import Rescue from '../screens/Rescue/Rescue';
import Call from '../screens/Call/Call';
import Prepare from '../screens/Prepare/Prepare';
import Learn from '../screens/Learn/Learn';

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
    Home: HomeStack,
    Map: MapStack,
    Learn: LearnStack
    // Profile: ProfileStack
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;

            if (routeName === 'Home') {
                iconName = `ios-home`;
            } else if (routeName === 'Map') {
                iconName = `ios-map`;
            }
            else if (routeName === 'Rescue') {
                iconName = `ios-heart`;
            }

            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#222',
        inactiveTintColor: 'gray',
    },
});

// const AuthStack = createStackNavigator({
//     Login: {
//         screen: LoginScreen,
//         navigationOptions: {
//             header: null
//         }
//     },
//     Signup: {
//         screen: SignupScreen,
//         navigationOptions: {
//             header: null
//         }
//     },
//     SignupSuccess: {
//         screen: SignupSuccessScreen,
//         navigationOptions: {
//             header: null
//         }
//     }
// });


export default createAppContainer(createSwitchNavigator(
    {
        App: TabNavigator,
        Call: {
            screen: Call
        },
        RescueStack
        // Auth: AuthStack,
        // AuthLoading: AuthLoadingScreen,
        // ImageProcessingStack: ImageProcessing
    }
));