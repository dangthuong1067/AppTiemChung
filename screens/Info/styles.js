import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: COLORS.background,
    },
    formInput: {
        marginBottom: 40
    },
    search: {
        flex: 1,
        backgroundColor: COLORS.primary,
        height: 35,
        marginTop: 10,
        borderRadius: 7,
        opacity: 0.8,
        paddingStart: 25
    }

})

export default styles;