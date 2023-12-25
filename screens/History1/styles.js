import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formInput: {
        marginTop: 30,
    },
    formInput1: {
        marginTop: 30,
    },
    addRessInjecTion: {
        position: 'absolute',
        paddingHorizontal: 3,
        marginVertical: 30,
        marginLeft: 55,
        backgroundColor: 'white',
    },
    addRessText: {
        fontSize: 13,
        color: 'black',
    },
    addRess: {
        paddingBottom: 55,
        borderColor: COLORS.background
    },
    sympTom: {
        fontSize: 20
    },
    can: {
        flexDirection: 'row',

    },
    sympTomText: {
        margin: 8,
        marginLeft: 0,
        fontSize: 15,
    },
    note: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 20,
    },
    sympToms: {
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    conFirm: {
        width: 180,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        marginVertical: 5
    },
    conFirmText: {
        fontSize: 16,
        color: COLORS.second,
        textAlign: 'center'
    },
    styleButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 12,

    },
    changePass: {
        position: 'absolute',
        right: 20,
        borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        marginTop: 5
    },
})

export default styles;