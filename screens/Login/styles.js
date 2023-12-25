import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: '#e2e4cc',
        marginTop: -40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    formInput: {
        marginBottom: 20,
    },
    conFirm: {
        width: 300,
        height: 56,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 45,
        backgroundColor: COLORS.primary,
        marginVertical: 5
    },
    conFirmText: {
        fontSize: 16,
        color: COLORS.second,
        textAlign: 'center'
    },
    appName: {
        backgroundColor: COLORS.primary,
    },
    textApp: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default styles;