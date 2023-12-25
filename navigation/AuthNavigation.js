import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { LoginScreen, SymptomScreen, ShowInfoScreen, CheckinScreen, ShowInfoPerSonScreen, ShowResultPerSonScreen } from "../screens";
function AuthStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SymptomScreen" component={SymptomScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
            <Stack.Screen name="ShowInfoScreen" component={ShowInfoScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
            <Stack.Screen name="CheckinScreen" component={CheckinScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
            <Stack.Screen name="ShowInfoPerSonScreen" component={ShowInfoPerSonScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
            <Stack.Screen name="ShowResultPerSonScreen" component={ShowResultPerSonScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
        </Stack.Navigator>
    )
}

export default AuthStackScreen;
