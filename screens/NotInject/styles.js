import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: COLORS.background
    },
    textInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
    },
    formInput: {
        marginTop: 30,
        marginBottom: 30
    },
    changePass: {
        position: 'absolute',
        right: 20,
        borderWidth: 1,
        paddingHorizontal: 30,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        marginTop: 5
    },
    changePassText: {
        fontSize: 14,
        color: '#fefeef',
        fontWeight: 'bold'
    },
    search: {
        flex: 1,
        backgroundColor: '#e2e4cc',
        height: 35,
        marginTop: 10,
        borderRadius: 5,
        opacity: 0.8,
        paddingStart: 30
    }
})

export default styles;