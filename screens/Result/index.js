import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import { InputStyle } from '../../components'
import { COLORS } from '../../contains';
import { useDispatch } from "react-redux";

const ResultScreen = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
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
                navigation.navigate('HistoryScreen', {

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
                <View style={styles.formInput}>
                    <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                    <TouchableOpacity style={styles.changePass}>
                        <Text style={styles.changePassText}>sfffgdfgfdgfg</Text>
                    </TouchableOpacity>
                </View>

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
                    <InputStyle name={'Ngày tiêm'} editable={false} value1={route.params.personDateInjection} />
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
                        name={'1. Tiền sử rõ ràng phản vệ với vắc xin\n phòng COVID-19 lần trước hoặc các thành phần của vắc xin phòng COVID-19'} value1={tc1} onChange={(value) => setTc1(value)} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'2. Tiểu sử rõ ràng bị COVID-19 trong vòng\n 6 tháng'} value1={tc2} onChange={(value) => setTc2(value)} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'3. Đang mắc bệnh cấp tính'} value1={tc3} onChange={(value) => setTc3(value)} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'4. Phụ nữ mang thai'} value1={tc4} onChange={(value) => setTc4(value)} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'5. Phản vệ độ 3 trở lên với bất kỳ nguyên\n nhân nào(nếu có, loại tác nhân dị ứng...)'} value1={tc5} onChange={(value) => setTc5(value)} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'6. Đang bị suy giảm miễn dịch nặng, ung\n thư giai đoạn cuối đang điều trị hóa trị,\n xạ trị'} value1={tc6} onChange={(value) => setTc6(value)} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'7.Tiền sử dị ứng với bất kỳ nguyên nhân\n nào'} value1={tc7} onChange={(value) => setTc7(value)} />
                </View>


                <View style={styles.formInput}>
                    <InputStyle name={'8. Tiền sử rối loạn đông máu/cầm máu'} value1={tc8} onChange={(value) => setTc8(value)} />
                </View>

                <View style={styles.formInput}>
                    <InputStyle name={'9. Rối loạn tri giác, rối loạn hành vi'} value1={tc9} onChange={(value) => setTc9(value)} />
                </View>


                <View style={[styles.formInput, { marginBottom: 20 }]}>
                    <InputStyle name={'10. Bất thường dấu hiệu sốt(nếu có, ghi rõ)'} value1={tc10} onChange={(value) => setTc10(value)} />
                </View>
                <View style={styles.styleButton}>
                    <TouchableOpacity style={[styles.conFirm, { backgroundColor: '#fae335d9' }]}>
                        <Text style={[styles.conFirmText, { color: 'black', fontWeight: 'bold' }]}>KHÔNG ĐỒNG Ý TIÊM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.conFirm, { backgroundColor: '#fa3535c4' }]}>
                        <Text style={styles.conFirmText}>CHỐNG CHỈ ĐỊNH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.styleButton}>
                    <TouchableOpacity style={[styles.conFirm, { backgroundColor: '#fa7635' }]}>
                        <Text onPress={handleSubmit1} style={styles.conFirmText}>HOÃN TIÊM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conFirm}>
                        <Text onPress={handleSubmit} style={styles.conFirmText}>ĐỦ ĐIỀU KIỆN TIÊM</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: COLORS.background, marginTop: 30, marginHorizontal: 10 }} />
                </View>
            </ScrollView>
        </>

    )
}

export default ResultScreen


