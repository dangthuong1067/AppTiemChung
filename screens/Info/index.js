import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StatusBar, FlatList } from 'react-native'
import axios from "axios";
//import styles from '../Symptom/styles';
import styles from '../Symptom/styles';
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo9 } from "../../store/slices/info9";
//import { fetchInfo1 } from "../../store/slices/info1";
const InfoScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const filteredInfos = () => infoData9?.filter(eachInfo => eachInfo.HoTen.toLowerCase().includes(searchText.toLowerCase()))
    const dispatch = useDispatch()
    const infoData9 = useSelector(state => state.Info9.info9)

    //const infoData1 = useSelector(state => state.Info1.info1)
    useEffect(() => {
        dispatch(fetchInfo9())
    }, [])
    // useEffect(() => {
    //     dispatch(fetchInfo1())
    // }, [])
    const showCategoryHome = ({ item }) => {
        const categoryItem = infoData9?.find(category => category.MaDK === item.MaDK)
        //const categoryItem1 = infoData1?.find(category => category.MaDK === categoryItem.MaDK)
        return (
            infoData9 ? (
                <View style={[styles.formInput, { marginBottom: 30 }]}>
                    <InputStyle
                        name={'Họ tên'}
                        value1={categoryItem?.HoTen}
                        editable={false}
                        onPress={() => {
                            navigation.navigate('Info1Screen', {
                                personID: categoryItem.MaDK,
                                NgayTiem: categoryItem.NgayTiem,
                                personName: categoryItem.HoTen,
                                personPhone: categoryItem.SDT,
                                personCMND: categoryItem.CMND,
                                personAddress: categoryItem.DiaChi,
                                personAddressInject: categoryItem.NgayTiem,
                                personAddressInject: categoryItem.TenDiemTiem,
                                vaccinName: categoryItem.TenVaccine,
                                doctorName: categoryItem.TenBS,
                            })
                        }}
                    />

                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }}>Chưa có ai được tiêm chủng</Text>
                </View>
            )

        )
    }

    // const renderEmty = () => {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
    //             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Chưa có ai được tiêm</Text>
    //         </View>
    //     )
    // }
    return (
        <>

            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
            </View>
            <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginTop: -30 }}>
                <FontAwesome name="search" size={24} color="black" style={{ position: "absolute", top: 22, left: 10 }} />
                <TextInput autoCorrect={false} style={styles.search} placeholder='Tìm kiếm' onChangeText={(text) => setSearchText(text)} />
            </View>
            {/* </ScrollView>  */}
            {/* <FlatList
                data={infoData9}
                renderItem={showCategoryHome}
                //keyExtractor={(item) => item.id.toString()}
                keyExtractor={(item) => item.MaDK.toString()}
                ListEmptyComponent={renderEmty}
            /> */}

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

export default InfoScreen


