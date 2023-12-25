import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from "react-redux";
//import { fetchInfo1 } from "../../store/slices/info1";
import { fetchInfo10 } from "../../store/slices/info10";

const HistoryOfHomeScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const infoData10 = useSelector(state => state.Info10.info10)
    //const infoData1 = useSelector(state => state.Info1.info1)
    useEffect(() => {
        dispatch(fetchInfo10())
    }, [])
    // useEffect(() => {
    //     dispatch(fetchInfo1())
    // }, [])
    const showCategoryHome = ({ item }) => {
        const categoryItem = infoData10?.find(category => category.MaDK === item.MaDK)
        return (
            <View style={[styles.formInput, { marginBottom: 30 }]}>
                <InputStyle
                    name={'Họ tên'}
                    value1={categoryItem.HoTen}
                    editable={false}
                    onPress={() => {
                        navigation.navigate('HistoryOfHome1Screen', {
                            personID: categoryItem.MaDK,
                            NgayTiem: categoryItem.NgayTiem,
                            personName: categoryItem.HoTen,
                            personPhone: categoryItem.SDT,
                            personCMND: categoryItem.CMND,
                            personAddress: categoryItem.DiaChi,
                            personAddressInject: categoryItem.TenDiemTiem,
                            TC1: categoryItem.TC1,
                            TC2: categoryItem.TC2,
                            TC3: categoryItem.TC3,
                            TC4: categoryItem.TC4,
                            TC5: categoryItem.TC5,
                            TC6: categoryItem.TC6,
                            TC7: categoryItem.TC7,
                            TC8: categoryItem.TC8,
                            TC9: categoryItem.TC9,
                            TC10: categoryItem.TC10,
                            Resultt: categoryItem.KetQua,
                        })
                    }}
                />
                {
                    (categoryItem.KetQua == 'Đủ điều kiện tiêm') ?
                        <TouchableOpacity style={styles.changePass}>
                            <Text style={styles.changePassText}>{categoryItem.KetQua}</Text>
                        </TouchableOpacity>
                        : (
                            (categoryItem.KetQua == 'Hoãn tiêm') ?
                                <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fa7635' }]}>
                                    <Text style={styles.changePassText}>{categoryItem.KetQua}</Text>
                                </TouchableOpacity>
                                : (
                                    (categoryItem.KetQua == 'Chống chỉ định') ?
                                        <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fa3535c4' }]}>
                                            <Text style={styles.changePassText}>{categoryItem.KetQua}</Text>
                                        </TouchableOpacity>
                                        : (
                                            <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fbbc05' }]}>
                                                <Text style={styles.changePassText}>{categoryItem.KetQua}</Text>
                                            </TouchableOpacity>
                                        )
                                )
                        )
                }
            </View>
        )
    }
    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
            </View>
            <FlatList
                data={infoData10}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item.MaDK.toString()}
            />
        </>

    )
}

export default HistoryOfHomeScreen


