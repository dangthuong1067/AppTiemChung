import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo12 } from "../../store/slices/info12";

const ShowInfoPerSonScreen = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const infoData12 = useSelector(state => state.Info12.info12)//để lấy ra thông tin user
    useEffect(() => {
        dispatch(fetchInfo12({ id: route.params.personID }))
    }, [])

    const handleSubmit = () => {
        navigation.goBack()
    }
    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.formInput1}>
                <Text style={styles.textInfo}>THÔNG TIN CÁ NHÂN</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.formInput}>
                    <InputStyle name={'Họ tên'} editable={false}
                        value1={infoData12[0]?.HoTen}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Giới tính'} editable={false}
                        value1={infoData12[0]?.GioiTinh}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Số điện thoại'} editable={false}
                        value1={infoData12[0]?.SDT}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Số CMND/CCCD(nếu có)'} editable={false}
                        value1={infoData12[0]?.CMND}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Nơi ở'} editable={false}
                        value1={infoData12[0]?.DiaChi}
                        multiline={true}
                    />
                </View>

                <View style={styles.styleButton}>
                    <TouchableOpacity style={styles.conFirm}>
                        <Text onPress={handleSubmit} style={styles.conFirmText}>ĐÓNG</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 50, marginHorizontal: 10 }} />
                </View>
            </ScrollView>
        </>

    )
}

export default ShowInfoPerSonScreen
