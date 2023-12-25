import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import styles from './styles'
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo11 } from "../../store/slices/info11";
import { Ionicons } from '@expo/vector-icons';
const ShowResultPerSonScreen = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const infoData11 = useSelector(state => state.Info11.info11)//để lấy ra thông tin user
    useEffect(() => {
        dispatch(fetchInfo11({ id: route.params.personID }))
    }, [])

    //để lấy ra thời gian tiêm
    const handleSubmit = () => {
        navigation.goBack()
    }
    const showCategoryHome = ({ item, index }) => {
        return (
            <>
                <StatusBar hidden={true} />
                <ScrollView style={styles.container}>
                    <Text style={styles.textInfo1}>{`MŨI ${index + 1}`}</Text>
                    <View style={styles.formInput}>
                        <InputStyle name={'Họ tên'} editable={false} value1={item?.HoTen} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Giới tính'} editable={false} value1={item?.GioiTinh} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Số điện thoại'} editable={false} value1={item?.SDT} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Số CMND/CCCD(nếu có)'} editable={false} value1={item?.CMND} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Nơi ở'} editable={false} value1={item?.DiaChi} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Tên Vaccin'} editable={false} value1={item?.TenVaccine} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Bác sĩ tiêm'} editable={false} value1={item?.TenBS} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'black', marginTop: 50, marginHorizontal: 10 }} />
                    </View>
                </ScrollView>
            </>
        )
    }

    const renderEmty = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Bạn chưa được tiêm chủng</Text>
            </View>
        )
    }
    return (
        <>
            <View style={styles.customHeader}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={{ marginLeft: 25, marginHorizontal: 35, marginVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={26} color={COLORS.second} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <View style={styles.formInput5}>
                    <Text style={styles.textInfo}>KẾT QUẢ TIÊM</Text>
                </View>
            </View>

            <FlatList
                data={infoData11}
                renderItem={showCategoryHome}
                keyExtractor={(item, index) => item?.MaDK.toString()}
                ListEmptyComponent={renderEmty}
            />
            <View style={styles.styleButton}>
                <TouchableOpacity style={styles.conFirm}>
                    <Text onPress={handleSubmit} style={styles.conFirmText}>ĐÓNG</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default ShowResultPerSonScreen


