import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../contains";
import { InfoScreen } from "../screens";
import { Info1Screen } from "../screens";
const InfoStack = createStackNavigator();

const InfoStackScreen = () => {
  return (
    <InfoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.second
      }}
    >
      <InfoStack.Screen name="InfoScreen" component={InfoScreen} options={{ title: 'Lịch sử kết quả tiêm', headerLeft: null }} />
      <InfoStack.Screen name="Info1Screen" component={Info1Screen} options={{ title: 'Thông tin kết quả tiêm' }} />
    </InfoStack.Navigator>
  );
}

export default InfoStackScreen