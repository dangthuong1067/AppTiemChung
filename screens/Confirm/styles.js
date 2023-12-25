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
        marginBottom: 20
    },
    sympToms: {
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10
    },
    conFirm: {
        width: 150,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal: 120,
        backgroundColor: COLORS.primary,
    },
    conFirmText: {
        fontSize: 20,
    },

    inputAndroid: {
        color: 'black'
    }
})

export default styles;