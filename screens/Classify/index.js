import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from 'react-native'
import { Category } from "../../components";
import styles from './styles'
const ClassifyScreen = () => {
    const navigation = useNavigation()

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Category
                        image={require('../../assets/images/xn.jpg')}
                        title="Đủ điều kiện tiêm"
                        onPress={() => {
                            navigation.push('Classify1Screen', {

                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/ds4.png')}
                        title="Không đồng ý tiêm"
                        onPress={() => {
                            navigation.push('Classify2Screen', {

                            })
                        }}
                    />

                    <Category
                        image={require('../../assets/images/ct.jpg')}
                        title="Chống chỉ định"
                        onPress={() => {
                            navigation.push('Classify3Screen', {

                            })
                        }}
                    />

                    <Category
                        image={require('../../assets/images/po.jpg')}
                        title="Hoãn tiêm"
                        onPress={() => {
                            navigation.push('Classify4Screen', {

                            })
                        }}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default ClassifyScreen



