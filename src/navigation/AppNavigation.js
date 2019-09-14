import React from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens 
import Home from '../screens/Home/Home';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});


// const TabNavigator = createBottomTabNavigator({
//     Home: HomeStack,
//     Hot: HotStack,
//     FindMe: FindMeStack,
//     // Profile: ProfileStack
// }, {
//     defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//             const { routeName } = navigation.state;
//             let IconComponent = Ionicons;
//             let iconName;

//             if (routeName === 'Home') {
//                 iconName = `ios-home`;
//             } else if (routeName === 'Hot') {
//                 iconName = `ios-flame`;
//             } else if (routeName === 'Profile') {
//                 iconName = `ios-person`;
//             }
//             else if (routeName === 'FindMe') {
//                 iconName = `ios-map`;
//             }

//             // You can return any component that you like here!
//             return <IconComponent name={iconName} size={25} color={tintColor} />;
//         },
//     }),
//     tabBarOptions: {
//         activeTintColor: '#2ecc71',
//         inactiveTintColor: 'gray',
//     },
// });

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
        Home: HomeStack,
        // Auth: AuthStack,
        // AuthLoading: AuthLoadingScreen,
        // ImageProcessingStack: ImageProcessing
    }
));