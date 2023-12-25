import React, { useEffect } from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from '../Symptom/styles';
import { InputStyle } from '../../components'
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo9 } from "../../store/slices/info9";
const Info1Screen = ({ route }) => {
    const dispatch = useDispatch()
    //để lấy ra tên vaccin
    useEffect(() => {
        dispatch(fetchInfo9())
    }, [])
    const infoData9 = useSelector(state => state.Info9.info9)
    let obj = infoData9?.find(obj => obj.MaDK == route.params.personID);

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
                <View style={styles.formInput}>
                    <InputStyle name={'Tên Vaccin'} editable={false} value1={route.params.vaccinName} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Bác sĩ tiêm'} editable={false} value1={obj?.TenBS} value1={route.params.doctorName} />
                </View>
                <View style={styles.formInput1}>
                    <InputStyle name={'Nơi tiêm'} editable={false} style={styles.addRess} value1={route.params.personAddressInject} />
                    <View style={styles.addRessInjecTion}>
                        <Text style={styles.addRessText}>Tên nơi tiêm</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default Info1Screen


