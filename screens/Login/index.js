import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles';
import { InputStyle } from '../../components'
import axios from "axios";
import { showNotice } from "../../lib";
import { COLORS } from "../../contains";
export const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState({
        loadingLogin: false,
    })

    const chuyenTrang = () => {
        if (password === '' || password === null) {
            showNotice('Vui lòng nhập mật khẩu', true)
            return true
        }
        if (userName === '' || userName === null) {
            showNotice('Vui lòng nhập tài khoản', true)
            return true
        }

        setLoading({ loadingLogin: true })
        axios.get(`https://tt-tc-api.webcore.vn/api/DangNhap/${userName},${password}`)
            .then(function (response) {
                if (response.data == 0) {
                    showNotice('Sai tài khoản hoặc mật khẩu', true)
                }
                if (response.data == 1) {
                    navigation.navigate('ShowInfoScreen', {
                        personID: userName
                    })
                }

                if (response.data == 2) {
                    navigation.navigate('MyTabs', {
                    })
                    setUserName('')
                    setPassword('')
                }
                setLoading({ loadingLogin: false })


            })
            .catch(function (error) {
                showNotice('Sai tài khoản', true)
                setLoading({ loadingLogin: false })
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>
            <View style={styles.appName}>
                <Text></Text>
            </View>

            <View style={styles.container}>
                <View style={styles.formInput}>
                    <InputStyle name={'Tài khoản'} value1={userName} onChange={(value) => setUserName(value)} />
                </View>
                <View style={styles.formInput}>
                    <InputStyle name={'Mật khẩu'} value1={password} onChange={(value) => setPassword(value)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={[styles.conFirm, { marginTop: 28 }]}>
                    {loading.loadingLogin ? <ActivityIndicator size="large" color={COLORS.background} />
                        : <Text onPress={chuyenTrang} style={styles.conFirmText}>ĐĂNG NHẬP</Text>}
                </TouchableOpacity>

            </View >
        </>
    )

}


export default LoginScreen