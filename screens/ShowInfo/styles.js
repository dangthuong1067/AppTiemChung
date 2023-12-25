import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        backgroundColor: COLORS.background,
    },
    custom: {
        marginTop: 40,
        backgroundColor: COLORS.background,
    },
    customText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15
    },
    customText1: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    list: {
        marginTop: 25,
    },
    container1: {
        backgroundColor: COLORS.background,
    }

})

export default styles

