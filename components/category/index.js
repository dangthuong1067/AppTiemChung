import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
const Category = ({ onPress, title, image }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.categoryWrap}>
                <View style={styles.category}>
                    <View style={styles.categoryBoxImg}>
                        <Image style={styles.categoryImg}
                            source={image}
                        />
                    </View>
                    <Text style={styles.categoryText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Category
