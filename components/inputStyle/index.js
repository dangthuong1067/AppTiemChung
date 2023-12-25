import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { TextInput, Text, View } from "react-native";
import { IconStyle } from "../../components";
import styles from "./styles";
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
    'Require cycle:'
])

const InputStyle = ({ name, style, editable = true, value1, onPress, onChange, placeholder, secureTextEntry, multiline }) => {
    let obj = {
        name: name,
        style,
        editable: editable,
        icon: <></>,
        value1
    }

    switch (name) {
        case 'Họ tên':
            obj.icon = <IconStyle name={'person-sharp'} />
            break;
        case 'Giới tính':
            obj.icon = <IconStyle name={'male-female'} />
            break;
        case 'Check-in':
            obj.icon = <IconStyle name={'user-check'} />
            break;
        case 'Số điện thoại':
            obj.icon = <IconStyle name={'phone-call'} />
            break;
        case 'Số CMND/CCCD(nếu có)':
            obj.icon = <IconStyle name={'idcard'} />
            break;
        case 'Tên vaccin':
            obj.icon = <IconStyle name={'injection-syringe'} />
            break;
        case 'Lô vaccin':
            obj.icon = <IconStyle name={'content-paste'} />
            break;
        case 'Nơi ở':
            obj.icon = <IconStyle name={'location-city'} />
            break;
        case 'Ngày tiêm':
            obj.icon = <IconStyle name={'today'} />
            break;
        case 'Tên Vaccin':
            obj.icon = <IconStyle name={'medicinebox'} />
            break;
        case 'Bác sĩ tiêm':
            obj.icon = <IconStyle name={'doctor'} />
            break;
        case 'Tài khoản':
            obj.icon = <IconStyle name={'account-tie'} />
            break;
        case 'Mật khẩu':
            obj.icon = <IconStyle name={'key-outline'} />
            break;

        case 'Nơi tiêm':
        case 'Điểm tiêm':
        case 'Tên điểm tiêm':
        case 'Tất cả địa điểm':
            obj.icon = <IconStyle name={'search-location'} />
            break;
        default:
            break;
    }

    switch (name) {
        case 'Tên điểm tiêm':
            obj.value1 = <Text>123</Text>
            break;

        default:
            break;
    }

    return (
        <>
            <TouchableOpacity onPress={onPress} >
                <View style={styles.title}>
                    <View style={styles.icon}>{obj.icon}</View>
                    <Text style={styles.textInputLabel}>{obj.name}</Text>
                </View>

                <TextInput
                    style={[styles.textInput, obj.style]}
                    editable={obj.editable}
                    value={value1}
                    onChangeText={(value1) => onChange(value1)}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    multiline={multiline}
                />
            </TouchableOpacity>

        </>
    )
}

export default InputStyle