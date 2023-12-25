import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../contains";
const Stack = createStackNavigator();
import AuthStackScreen from './AuthNavigation'
import MyTabs from './index'
const TabStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second,
                headerShown: false
            }}
        >
            <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} options={{ title: 'Info' }} />
            <Stack.Screen name="MyTabs" component={MyTabs} options={{ title: 'Info' }} />
        </Stack.Navigator>

    );
}

export default TabStackScreen