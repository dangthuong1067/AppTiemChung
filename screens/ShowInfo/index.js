import React, { useEffect } from 'react'
import { View, ScrollView, Text, Alert } from 'react-native'
import { Category } from "../../components";
import styles from "./styles";
import { fetchInfo3 } from "../../store/slices/info3";
import { useDispatch, useSelector } from "react-redux";
const ShowInfoScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const infoData3 = useSelector(state => state.Info3.info3)//bảng kế hoạch tiêm lấy checkin
    let obj3 = infoData3?.find(obj3 => obj3.CMND == route.params.personID);

    useEffect(() => {
        dispatch(fetchInfo3())
    }, [])
    return (
        <View style={styles.container1}>
            <View style={styles.custom}>
                <Text style={styles.customText}>{`Xin chào ${obj3?.HoTen}`}</Text>
                <Text style={styles.customText1}>{`Trạng thái: ${obj3?.Checkin ? `Đã check-in` : `Chưa check-in`}`}</Text>
            </View>
            <ScrollView style={styles.list}>
                <View style={styles.container}>
                    <Category
                        image={require('../../assets/images/if9.jpg')}
                        title="Xem thông tin cá nhân"
                        onPress={() => {
                            navigation.push('ShowInfoPerSonScreen', {
                                personID: route.params.personID
                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/ci.jpg')}
                        title="Checkin điểm tiêm"
                        onPress={() => {
                            navigation.push('CheckinScreen', {
                                personID: route.params.personID
                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/xn.jpg')}
                        title="Kết quả tiêm"
                        onPress={() => {
                            navigation.push('ShowResultPerSonScreen', {
                                personID: route.params.personID
                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/lo1.jpg')}
                        title="Đăng xuất"
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
                        }} />

                </View>
                <View style={{ backgroundColor: '#EFF7F8' }}>
                    <Text></Text>
                </View>
                <View style={{ backgroundColor: '#EFF7F8' }}>
                    <Text></Text>
                </View>
                <View style={{ backgroundColor: '#EFF7F8' }}>
                    <Text></Text>
                </View>
                <View style={{ backgroundColor: '#EFF7F8' }}>
                    <Text></Text>
                </View>
                <View style={{ backgroundColor: '#EFF7F8' }}>
                    <Text></Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ShowInfoScreen


