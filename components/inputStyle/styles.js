import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: COLORS.background,
    },
    textInput: {
        borderBottomWidth: 0.7,
        borderColor: 'black',
        marginLeft: 53,
        paddingTop: 25,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInputLabel: {
        fontSize: 20,
    },
    icon: {
        color: 'black',
        paddingHorizontal: 15
    },
    title: {
        flexDirection: 'row'
    },

})

export default styles;