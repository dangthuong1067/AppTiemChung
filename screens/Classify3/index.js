import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native'

import styles from './styles'
import { InputStyle } from '../../components'
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../contains';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
//import { fetchInfo1 } from "../../store/slices/info1";
import { fetchInfo10 } from "../../store/slices/info10";

const Classify3Screen = () => {
    const [searchText, setSearchText] = useState('');
    const filteredInfos = () => obj?.filter(eachInfo => eachInfo.HoTen.toLowerCase().includes(searchText.toLowerCase()))
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const infoData10 = useSelector(state => state.Info10.info10)

    let obj = infoData10?.filter(obj => obj?.KetQua === "Chống chỉ định");
    // const infoData1 = useSelector(state => state.Info1.info1)
    useEffect(() => {
        dispatch(fetchInfo10())
    }, [])
    // useEffect(() => {
    //     dispatch(fetchInfo1())
    // }, [])
    const showCategoryHome = ({ item }) => {
        const categoryItem = obj?.find(category => category.MaDK === item.MaDK)
        return (
            <View style={styles.formInput}>
                <InputStyle
                    name={'Họ tên'}
                    value1={categoryItem.HoTen}
                    editable={false}
                    onPress={() => {
                        navigation.navigate('History1Screen', {
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

                <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fa3535c4' }]}>
                    <Text style={styles.changePassText}>{categoryItem?.KetQua}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
            </View>
            <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: -20, marginBottom: 10 }}>
                <FontAwesome name="search" size={24} color="black" style={{ position: "absolute", top: 22, left: 10 }} />
                <TextInput autoCorrect={false} style={styles.search} placeholder='Tìm kiếm' onChangeText={(text) => setSearchText(text)} />
            </View>

            {filteredInfos().length > 0 ? <FlatList
                data={filteredInfos()}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item?.MaDK.toString()}
            /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 35 }}>Không tìm thấy ai</Text>
            </View>}
        </>

    )
}

export default Classify3Screen
