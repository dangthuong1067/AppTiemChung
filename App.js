import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStackScreen from './navigation/Routes'
import { Provider } from 'react-redux' //lấy trên tài liệu redux toolkit
import store from "./store";
import FlashMessage from "react-native-flash-message";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabStackScreen />
        <FlashMessage position="top" />
      </NavigationContainer >
    </Provider>
  );
}
