import React from "react";
import { View } from "react-native";
import { AntDesign, Fontisto, Feather, MaterialIcons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../contains";
const IconStyle = ({ name }) => {
    let icon;
    switch (name) {
        case 'person-sharp':
            icon = <Ionicons name={name} size={25} color={COLORS.primary} />
            break;
        case 'today':
            icon = <Ionicons name={name} size={25} color={COLORS.primary} />
            break;
        case 'phone-call':
            icon = <Feather name={name} size={25} color={COLORS.primary} />
            break;
        case 'user-check':
            icon = <Feather name={name} size={25} color={COLORS.primary} />
            break;
        case 'idcard':
            icon = <AntDesign name={name} size={25} color={COLORS.primary} />
            break;
        case 'medicinebox':
            icon = <AntDesign name={name} size={25} color={COLORS.primary} />
            break;
        case 'injection-syringe':
            icon = <Fontisto name={name} size={25} color={COLORS.primary} />
            break;
        case 'doctor':
            icon = <Fontisto name={name} size={25} color={COLORS.primary} />
            break;
        case 'content-paste':
            icon = <MaterialIcons name={name} size={25} color={COLORS.primary} />
            break;
        case 'location-city':
            icon = <MaterialIcons name={name} size={25} color={COLORS.primary} />
            break;
        case 'search-location':
            icon = <Icon name={name} size={25} color={COLORS.primary} />
            break;
        case 'male-female':
            icon = <Foundation name={name} size={25} color={COLORS.primary} />
            break;
        case 'account-tie':
            icon = <MaterialCommunityIcons name={name} size={25} color={COLORS.primary} />
            break;
        case 'key-outline':
            icon = <Ionicons name={name} size={25} color={COLORS.primary} />
            break;
        default:
            break;
    }

    return (
        <View>
            {icon}
        </View>
    )
}

export default IconStyle