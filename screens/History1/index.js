import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { ScrollView, View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native'

import styles from './styles'
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from "react-redux";


const History1Screen = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // const infoData4 = useSelector(state => state.Info4.info4)
    // console.log('infoData4', infoData4);
    // useEffect(() => {
    //     dispatch(fetchInfo4())
    // }, [])
    const [tc1, setTc1] = useState('')
    const [tc2, setTc2] = useState('')
    const [tc3, setTc3] = useState('')
    const [tc4, setTc4] = useState('')
    const [tc5, setTc5] = useState('')
    const [tc6, setTc6] = useState('')
    const [tc7, setTc7] = useState('')
    const [tc8, setTc8] = useState('')
    const [tc9, setTc9] = useState('')
    const [tc10, setTc10] = useState('')
    const handleSubmit = () => {
        console.log('log thử triệu chứng 1:', tc1)

        // console.log({ ids: checked });
        // console.log('id', id)
        // console.log('name', name)

        // dispatch(fetchClinical({
        //     MaDK: 7,
        //     NgayTiem: route.params.personDateInjection,
        //     TC1: tc1,
        //     TC2: tc2,
        //     TC3: tc3,
        //     TC4: tc4,
        //     TC5: tc5,
        //     TC6: tc6,
        //     TC7: tc7,
        //     TC8: tc8,
        //     TC9: tc9,
        //     TC10: tc10,
        //     KetQua: 'Đủ điều kiện tiêm',
        // }))


        axios.post('https://tt-tc-api.webcore.vn/api/KhamLamSang', {
            MaDK: route.params.personID,
            NgayTiem: route.params.personDateInjection,
            TC1: tc1,
            TC2: tc2,
            TC3: tc3,
            TC4: tc4,
            TC5: tc5,
            TC6: tc6,
            TC7: tc7,
            TC8: tc8,
            TC9: tc9,
            TC10: tc10,
            KetQua: 'Đủ điều kiện tiêm',
        })
            .then(function (response) {
                console.log('reposne nhe', response);

                //navigation.navigate('HistoryScreen')
                // navigation.navigate('HistoryScreen', { //C1:ko được thì chuyển về đây

                // })

                //Cách 2
                navigation.navigate('ConfirmScreen', {
                    personID: route.params.personID,
                    NgayTiem: route.params.personDateInjection,
                    personName: route.params.personName,
                    personPhone: route.params.personID,
                    personCMND: route.params.personID,
                    personAddress: route.params.personAddressInject,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //Hoãn tiêm
    const handleSubmit1 = () => {
        axios.post('https://tt-tc-api.webcore.vn/api/KhamLamSang', {
            MaDK: route.params.personID,
            NgayTiem: route.params.personDateInjection,
            TC1: tc1,
            TC2: tc2,
            TC3: tc3,
            TC4: tc4,
            TC5: tc5,
            TC6: tc6,
            TC7: tc7,
            TC8: tc8,
            TC9: tc9,
            TC10: tc10,
            KetQua: 'Hoãn tiêm',
        })
            .then(function (response) {
                navigation.navigate('HistoryScreen', {

                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView style={styles.container}>
                {
                    (route.params.Resultt == 'Đủ điều kiện tiêm') ? (
                        <View style={styles.formInput}>
                            <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                            <TouchableOpacity style={styles.changePass}>
                                <Text style={styles.changePassText}>{route.params.Resultt}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        (route.params.Resultt == 'Hoãn tiêm') ? (
                            <View style={styles.formInput}>
                                <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                                <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fa7635' }]}>
                                    <Text style={styles.changePassText}>{route.params.Resultt}</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            (route.params.Resultt == 'Chống chỉ định') ? (
                                <View style={styles.formInput}>
                                    <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                                    <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fa3535c4' }]}>
                                        <Text style={styles.changePassText}>{route.params.Resultt}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={styles.formInput}>
                                    <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                                    <TouchableOpacity style={[styles.changePass, { backgroundColor: '#fbbc05' }]}>
                                        <Text style={styles.changePassText}>{route.params.Resultt}</Text>
                                    </TouchableOpacity>
                                </View>
                            )

                        )
                    )

                }

                <View style={styles.formInput}>
                    <InputStyle name={'Số điện thoại'} editable={false} value1={route.params.personPhone} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Số CMND/CCCD(nếu có)'} editable={false} value1={route.params.personCMND} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Nơi ở'} editable={false} value1={route.params.personAddress} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Ngày tiêm'} editable={false} value1={route.params.NgayTiem} />
                </View>
                <View style={styles.formInput1}>
                    <InputStyle name={'Nơi tiêm'} editable={false} style={styles.addRess} value1={route.params.personAddressInject} />
                    <View style={styles.addRessInjecTion}>
                        <Text style={styles.addRessText}>Tên nơi tiêm</Text>
                    </View>
                </View>
                <Text style={styles.title}>Khám lâm sàng</Text>

                <View style={styles.formInput}>
                    <InputStyle
                        name={'1. Tiền sử rõ ràng phản vệ với vắc xin\n phòng COVID-19 lần trước hoặc các thành phần của vắc xin phòng\n COVID-19'} value1={route.params.TC1} onChange={(value) => setTc1(value)} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'2. Tiểu sử rõ ràng bị COVID-19 trong\n vòng 6 tháng'} onChange={(value) => setTc2(value)} value1={route.params.TC2} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'3. Đang mắc bệnh cấp tính'} onChange={(value) => setTc3(value)} value1={route.params.TC3} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'4. Phụ nữ mang thai'} value1={tc4} onChange={(value) => setTc4(value)} value1={route.params.TC4} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'5. Phản vệ độ 3 trở lên với bất kỳ\n nguyên nhân nào(nếu có, loại tác\n nhân dị ứng...)'} onChange={(value) => setTc5(value)} value1={route.params.TC5} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'6. Đang bị suy giảm miễn dịch nặng,\n ung thư giai đoạn cuối đang điều trị\n hóa trị, xạ trị'} onChange={(value) => setTc6(value)} value1={route.params.TC6} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'7.Tiền sử dị ứng với bất kỳ nguyên\n nhân nào'} onChange={(value) => setTc7(value)} value1={route.params.TC7} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'8. Tiền sử rối loạn đông máu/cầm\n máu'} onChange={(value) => setTc8(value)} value1={route.params.TC8} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'9. Rối loạn tri giác, rối loạn hành vi'} onChange={(value) => setTc9(value)} value1={route.params.TC9} />
                </View>


                <View style={[styles.formInput, { marginBottom: 20 }]}>
                    <InputStyle name={'10. Bất thường dấu hiệu sốt(nếu có,\n ghi rõ)'} onChange={(value) => setTc10(value)} value1={route.params.TC10} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
                </View>
            </ScrollView>
        </>

    )
}

export default History1Screen


