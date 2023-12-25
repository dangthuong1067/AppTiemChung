import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native'
import axios from "axios";
import styles from '../Symptom/styles';
import { InputStyle } from '../../components'
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
const ConfirmScreen = ({ navigation, route }) => {
    const [valueCheck, setValueCheck] = useState('')
    const [valueCheck1, setValueCheck1] = useState('')

    const placeholder = {
        label: 'Chọn tên vaccin...',
        value: null,
    };
    const placeholder1 = {
        label: 'Tên bác sĩ...',
        value: null,
    };
    const handleSubmit = () => {
        if (valueCheck1 === '' || valueCheck1 === null) {
            Alert.alert(
                "Thông báo",
                "Vui lòng chọn tên vaccin",
                [
                    { text: "OK", onPress: () => { } }
                ]
            );
            return true
        }

        if (valueCheck === '' || valueCheck === null) {
            Alert.alert(
                "Thông báo",
                "Vui lòng chọn tên bác sĩ",
                [
                    { text: "OK", onPress: () => { } }
                ]
            );
            return true
        }

        Alert.alert(
            "Thông báo",
            "Bạn muốn thực hiện điều này?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        axios.post('https://tt-tc-api.webcore.vn/api/KetQua', {
                            MaDK: route.params.personID,
                            HoTen: route.params.personName,
                            NgayTiem: route.params.personDateInjection,
                            MaBS: valueCheck,
                            TenBS: '',
                            MaVaccine: valueCheck1,
                            TenVacXin: '',
                        })
                            .then(function (response) {
                                navigation.navigate('InjectionResultScreen', {
                                    personID: route.params.personID,
                                    personName: route.params.personName,
                                    NgayTiem: route.params.NgayTiem,
                                    personPhone: route.params.personPhone,
                                    personCMND: route.params.personCMND,
                                    personAddress: route.params.personAddress,
                                    TenVacXin: '',
                                })
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }
            ]
        );
    }
    return (
        <View style={styles.container}>

            <ScrollView style={styles.container}>
                <View style={styles.formInput}>
                    <InputStyle name={'Họ tên'} editable={false} value1={route.params.personName} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Số điện thoại'} editable={false} value1={route.params.personPhone} />

                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Số CMND/CCCD(nếu có)'} editable={false} value1={route.params.personCMND} />
                </View>
                <View style={styles.formInput1}>
                    <InputStyle name={'Nơi tiêm'} editable={false} style={styles.addRess} value1={route.params.personAddress} multiline={true} />
                    <View style={styles.addRessInjecTion}>
                        <Text style={styles.addRessText}>Tên nơi tiêm</Text>
                    </View>
                </View>

                <Text style={{ marginLeft: 15, marginVertical: 5, fontSize: 18 }}>Tên vaccine</Text>
                <RNPickerSelect

                    style={{
                        inputAndroid: styles.inputAndroid
                    }}
                    onValueChange={(value) => setValueCheck1(value)}
                    items={[
                        { label: 'AstraZeneca', value: '1', color: 'black', },
                        { label: 'Gam-COVID-Vac', value: '2', color: 'black' },
                        { label: 'Vero Cell', value: '3', color: 'black' },
                        { label: 'Comirnaty(Pfizer)', value: '4', color: 'black', },
                        { label: 'Spikevax', value: '5', color: 'black' },
                        { label: 'Janssen', value: '6', color: 'black' },
                        { label: 'Hayat - Vax', value: '7', color: 'black' },
                        { label: 'Abdala', value: '8', color: 'black', },
                        { label: 'Umuenwore', value: '10', color: 'black' },
                    ]}
                    placeholder={placeholder}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <Chevron size={1.5} color="gray" style={{ marginRight: 30, marginTop: 17 }} />;
                    }}
                />
                <Text style={{ marginLeft: 15, marginVertical: 5, fontSize: 18 }}>Bác sĩ tiêm</Text>
                <RNPickerSelect
                    style={{
                        inputAndroid: styles.inputAndroid
                    }}
                    onValueChange={(value) => setValueCheck(value)}
                    items={[
                        { label: 'Nguyễn Nhật Minh', value: '1', color: 'black', },
                        { label: 'Trần Anh Tú', value: '2', color: 'black' },
                        { label: 'Nguyễn Thùy Trang', value: '3', color: 'black' },
                        { label: 'Trần Ngọc Anh Thư', value: '4', color: 'black', },
                        { label: 'Lê Xuân Hoàn', value: '5', color: 'black' },
                        { label: 'Huỳnh Anh Tứ', value: '6', color: 'black' },
                        { label: 'Nguyễn Nhật Trường', value: '7', color: 'black', },
                        { label: 'Hoàng Việt', value: '8', color: 'black' },
                        { label: 'Trương Tú Anh', value: '9', color: 'black' },
                        { label: 'Trần Thị Thu Minh', value: '10', color: 'black', },
                        { label: 'Nguyễn Nhật Trường', value: '11', color: 'black' },
                        { label: 'Lê Văn Nam', value: '12', color: 'black' },
                        { label: 'Nguyễn Nhật Tùng', value: '13', color: 'black', },
                        { label: 'Trần Văn An', value: '14', color: 'black' },
                        { label: 'Nguyễn Văn Anh', value: '15', color: 'black' },
                        { label: 'Trần Thị Thu', value: '16', color: 'black', },
                        { label: 'Lê Quang Anh', value: '17', color: 'black' },
                        { label: 'Trần Thị Hương', value: '18', color: 'black' },
                    ]}
                    placeholder={placeholder}
                    useNativeAndroidPickerStyle={false}
                    placeholder={placeholder1}
                    Icon={() => {
                        return <Chevron size={1.5} color="gray" style={{ marginRight: 30, marginTop: 17 }} />;
                    }}
                />

                <TouchableOpacity style={[styles.conFirm, { marginBottom: 25 }]}>
                    <Text onPress={handleSubmit} style={styles.conFirmText}>Xác nhận</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

export default ConfirmScreen


