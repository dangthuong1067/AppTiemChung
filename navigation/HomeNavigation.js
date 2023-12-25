import React from 'react';
import { TouchableOpacity, Button, Alert } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../contains";
import { MaterialIcons } from '@expo/vector-icons';
import {
    HomeScreen, CheckinScreen, ResultScreen, ConfirmScreen, HistoryOfHome1Screen, InfoOfHome1Screen, NotInjectScreen, ClassifyScreen,
    Classify1Screen, Classify2Screen, Classify3Screen, Classify4Screen,
    SymptomScreen, HistoryScreen, InfoScreen, ClinicalScreen, InjectionResultScreen, HistoryOfHomeScreen, InfoOfHomeScreen
} from "../screens";
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        < HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                },

            }
            }
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{
                title: 'Quản lý điểm tiêm', headerLeft: null, headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "Thông báo",
                                "Bạn có chắc chắn muốn đăng xuất không?",
                                [
                                    {
                                        text: "Không",
                                        onPress: () => { },
                                        style: "cancel"
                                    },
                                    { text: "Có", onPress: () => navigation.popToTop() }
                                ]
                            );
                        }}
                        style={{ marginRight: 20 }}>
                        <MaterialIcons name="logout" size={24} color={COLORS.second} />
                    </TouchableOpacity>
                ),
            }} />
            <HomeStack.Screen name="CheckinScreen" component={CheckinScreen} options={{ title: 'CHECKIN ĐIỂM TIÊM' }} />
            <HomeStack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'KẾT QUẢ LÂM SÀNG' }} />

            <HomeStack.Screen name="InjectionResultScreen" component={InjectionResultScreen} options={{
                title: 'KẾT QUẢ TIÊM', headerLeft: null, headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate('HomeScreen')}
                        title="Back to Home"
                        color='#e2e4cc'
                        fontSize={15}

                    />
                ),
            }} />

            <HomeStack.Screen name="ClinicalScreen" component={ClinicalScreen} options={{ title: 'KHÁM LÂM SÀNG' }} />
            <HomeStack.Screen name="ConfirmScreen" component={ConfirmScreen} options={{ title: 'XÁC NHẬN TIÊM CHỦNG', headerLeft: null }} />
            <HomeStack.Screen name="SymptomScreen" component={SymptomScreen} options={{ title: 'TRIỆU CHỨNG SAU TIÊM' }} />
            <HomeStack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerLeft: null, title: 'Lịch sử khám lâm sàng' }} />
            <HomeStack.Screen name="InfoScreen" component={InfoScreen} />
            <HomeStack.Screen name="HistoryOfHomeScreen" component={HistoryOfHomeScreen} options={{ title: 'Lịch sử khám lâm sàng' }} />
            <HomeStack.Screen name="HistoryOfHome1Screen" component={HistoryOfHome1Screen} options={{ title: 'Kết quả khám lâm sàng' }} />
            <HomeStack.Screen name="InfoOfHomeScreen" component={InfoOfHomeScreen} options={{ title: 'Lịch sử tiêm chủng' }} />
            <HomeStack.Screen name="InfoOfHome1Screen" component={InfoOfHome1Screen} options={{ title: 'Kết quả tiêm chủng' }} />
            <HomeStack.Screen name="NotInjectScreen" component={NotInjectScreen} options={{ title: 'Những người chưa tiêm chủng' }} />
            <HomeStack.Screen name="ClassifyScreen" component={ClassifyScreen} options={{ title: 'Phân loại kết quả khám' }} />
            <HomeStack.Screen name="Classify1Screen" component={Classify1Screen} options={{ title: 'Đủ điều kiện tiêm' }} />
            <HomeStack.Screen name="Classify2Screen" component={Classify2Screen} options={{ title: 'Không đồng ý tiêm' }} />
            <HomeStack.Screen name="Classify3Screen" component={Classify3Screen} options={{ title: 'Chống chỉ định' }} />
            <HomeStack.Screen name="Classify4Screen" component={Classify4Screen} options={{ title: 'Hoãn tiêm' }} />


        </HomeStack.Navigator >
    );
}

export default HomeStackScreen