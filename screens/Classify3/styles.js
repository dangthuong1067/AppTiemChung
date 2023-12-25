import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: COLORS.background,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        paddingTop: 26,
        //backgroundColor: COLORS.background,
        marginTop: 11
    },
    textInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        //marginHorizontal: 500,
        paddingLeft: 20,
        //fontSize: 10,
        //fontWeight: 'bold',
        //color: 'black'
    },
    formInput: {
        //flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30
    },
    changePass: {
        position: 'absolute',
        right: 20,
        borderWidth: 1,
        paddingHorizontal: 30,
        //borderRadius: 10,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        marginTop: 5
    },
    changePassText: {
        fontSize: 14,
        color: '#fefeef',
        fontWeight: 'bold'
        //flexDirection: 'row'
    },
    search: {
        flex: 1,
        backgroundColor: '#e2e4cc',
        //backgroundColor: COLORS.primary,
        height: 35,
        marginTop: 10,
        borderRadius: 5,
        opacity: 0.8,
        paddingStart: 30
    }
})

export default styles;