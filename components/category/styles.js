import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const width = Dimensions.get('window').width - 30
const height = Dimensions.get('window').height - 230

const styles = StyleSheet.create({
    categoryWrap: {
        width: width / 2,
        height: height / 2,
        paddingHorizontal: 17,
        paddingVertical: 60
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    categoryBoxImg: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 12
    },
    categoryImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    categoryText: {
        color: COLORS.title,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 25
    }
})

export default styles;