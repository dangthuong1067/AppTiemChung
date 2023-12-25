import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { COLORS } from '../../contains';
import { fetchInfo3 } from "../../store/slices/info3";
import { useDispatch, useSelector } from "react-redux";
export default function CheckinScreen({ route, navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch()
    const infoData3 = useSelector(state => state.Info3.info3)//bảng kế hoạch tiêm lấy checkin
    let obj3 = infoData3?.find(obj3 => obj3?.CMND == route.params?.personID);
    const goBackHome = () => {
        navigation.goBack()
        dispatch(fetchInfo3())
    }
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        if (obj3?.MaDiemTiem != data) {
            Alert.alert(
                "Thông báo",
                "Bạn check-in sai địa điểm đăng ký tiêm. Vui lòng checkin lại",
                [
                    { text: "OK", onPress: () => { } }
                ]
            );
            return true
        }
        if (obj3?.MaDiemTiem == data) {
            Alert.alert(
                "Thông báo",
                `Bạn đã check-in thành công \nBạn đang ở tại ${obj3?.TenDiemTiem} `,
                [
                    { text: "OK", onPress: () => { } }
                ]
            );
            axios.put(`https://tt-tc-api.webcore.vn/api/KeHoachTiem/checkin/${data},${route.params?.personID}`, {
                MaDiemTiem: data,
                CMND: route.params?.personID

            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };

    if (hasPermission === null) {
        return <Text>Yêu cầu quyền truy cập với camera</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Nhấn để quét lại'} onPress={() => setScanned(false)} />}
            </View>

            <View style={styles.styleButton}>
                <TouchableOpacity style={styles.conFirm}>
                    <Text onPress={goBackHome} style={styles.conFirmText}>ĐÓNG</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 900,
        marginTop: 180
    },
    styleButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 12,
    },
    conFirm: {
        width: 180,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: COLORS.primary,
        marginVertical: 5
    },
    conFirmText: {
        fontSize: 16,
        color: COLORS.second,
        textAlign: 'center'
    },
});

