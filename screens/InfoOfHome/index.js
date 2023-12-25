import React, { useEffect } from 'react'
import { View, StatusBar, FlatList } from 'react-native'
import styles from '../Symptom/styles';
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo9 } from "../../store/slices/info9";
//import { fetchInfo1 } from "../../store/slices/info1";
const InfoOfHomeScreen = ({ navigation, route }) => {
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
            <View style={[styles.formInput, { marginBottom: 30 }]}>
                <InputStyle
                    name={'Họ tên'}
                    value1={categoryItem?.HoTen}
                    editable={false}
                    onPress={() => {
                        navigation.navigate('InfoOfHome1Screen', {
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
        )
    }
    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
            </View>
            <FlatList
                data={infoData9}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item.MaDK.toString()}
            />
        </>

    )
}

export default InfoOfHomeScreen


