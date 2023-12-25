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
        // paddingLeft: 0,
        //marginTop: 10,
        fontSize: 20
    },
    can: {
        flexDirection: 'row',

    },
    // sympTom: {
    //     marginBottom: 10,
    // },
    sympTomText: {
        margin: 8,
        marginLeft: 0,
        fontSize: 15,
    },
    note: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 2,
        //height: 200,
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
        color: COLORS.second
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginHorizontal: 15,
        marginBottom: 30
    },
    picKer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    search: {
        flex: 1,
        backgroundColor: '#e2e4cc',
        //backgroundColor: COLORS.primary,
        height: 35,
        marginTop: 10,
        borderRadius: 7,
        opacity: 0.8,
        paddingStart: 40
    }
})

export default styles;