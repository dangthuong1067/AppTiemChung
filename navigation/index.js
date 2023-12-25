import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../contains";
import HomeStackScreen from "./HomeNavigation";
import HistoryStackScreen from "./HistoryNavigation";
import InfoStackScreen from "./InfoNavigation";
const Tab = createBottomTabNavigator();

//const MyTabs = ({ route }) => {
const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case 'History':
                            iconName = focused ? 'ios-time' : 'ios-time-outline';
                            break;
                        case 'Info':
                            iconName = focused ? 'ios-people' : 'ios-people-outline';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.second,
                tabBarInactiveTintColor: COLORS.second,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 65,
                    paddingBottom: 10
                },
                tabBarLabelStyle: {
                    fontSize: 13
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,

            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{ title: 'Trang chủ' }}
            />

            <Tab.Screen name="History" component={HistoryStackScreen} options={{ title: 'Lịch sử khám' }} />
            <Tab.Screen name="Info" component={InfoStackScreen} options={{ title: 'Lịch sử kết quả tiêm' }} />
        </Tab.Navigator>
    )
}

export default MyTabs