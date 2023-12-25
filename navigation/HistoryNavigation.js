import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../contains";
import { HistoryScreen, History1Screen } from "../screens";
const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second
      }}
    >
      <HistoryStack.Screen name="HistoryScreen" component={HistoryScreen} options={{ title: 'Lịch sử khám lâm sàng', headerLeft: null }} />
      <HistoryStack.Screen name="History1Screen" component={History1Screen} options={{ title: 'Thông tin khám lâm sàng' }} />

    </HistoryStack.Navigator>
  );
}

export default HistoryStackScreen