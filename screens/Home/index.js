import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { InputStyle } from '../../components'
import { Category } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../../store/slices/info";
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
const HomeScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const filteredInfos = () => infoData?.filter(eachInfo => eachInfo.HoTen.toLowerCase().includes(searchText.toLowerCase()))

    const dispatch = useDispatch()

    const infoData = useSelector(state => state.Info.info)

    useEffect(() => {
        dispatch(fetchInfo())
    }, [])

    const showCategoryHome = ({ item }) => {
        const categoryItem = infoData?.find(category => category?.MaDK === item?.MaDK)
        return (
            <>
                <TouchableOpacity
                >
                    <View style={styles.formInput}>
                        <InputStyle
                            name={'Họ tên'}
                            editable={false}
                            onPress={() => {
                                navigation.navigate('ClinicalScreen', {
                                    personID: categoryItem?.MaDK,
                                    personName: categoryItem?.HoTen,
                                    personPhone: categoryItem.SDT,
                                    personCMND: categoryItem?.CMND,
                                    personAddress: categoryItem?.DiaChi,
                                    personDateInjection: categoryItem?.NgayTiem,
                                    personAddressInject: categoryItem?.TenDiemTiem,
                                })
                            }}
                            value1={categoryItem?.HoTen}
                        />
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const renderContent = (props) => (
        <>
            <View
                style={{
                    backgroundColor: 'white',
                    padding: 16,
                    height: 450,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Danh sách những người đã checkin</Text>
                <View style={{ height: 60, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="search" size={24} color="black" style={{ position: "absolute", top: 22, left: 10 }} />
                    <TextInput autoCorrect={false} style={styles.search} placeholder='Tìm kiếm' onChangeText={(text) => setSearchText(text)} />
                </View>

                {filteredInfos().length > 0 ? <FlatList
                    data={filteredInfos()}
                    renderItem={showCategoryHome}
                    keyExtractor={(item) => item?.MaDK.toString()}
                /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 35 }}>Không tìm thấy ai</Text>
                </View>}

            </View>
        </>
    );

    const sheetRef = React.useRef(null);

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Category
                        image={require('../../assets/images/ci.jpg')}
                        title="Danh sách những người đã check-in"
                        onPress={() => sheetRef.current.snapTo(0)}
                    />
                    <Category
                        image={require('../../assets/images/du13.png')}
                        title="Đủ điều kiện tiêm nhưng chưa tiến hành tiêm chủng"
                        onPress={() => {
                            navigation.push('NotInjectScreen', {

                            })
                        }}
                    />

                    <Category
                        image={require('../../assets/images/xn.jpg')}
                        title="Lịch sử khám lâm sàng"
                        onPress={() => {
                            navigation.push('HistoryOfHomeScreen', {

                            })
                        }}
                    />

                    <Category
                        image={require('../../assets/images/pl.png')}
                        title="Phân loại kết quả khám lâm sàng"
                        onPress={() => {
                            navigation.push('ClassifyScreen', {

                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/kq.jpg')}
                        title="Lịch sử tiêm"
                        onPress={() => {
                            navigation.push('InfoOfHomeScreen', {

                            })
                        }}
                    />
                    <Category
                        image={require('../../assets/images/lo1.jpg')}
                        title="Đăng xuất"
                        onPress={() => {
                            Alert.alert(
                                "Thông báo",
                                "Bạn có chắc chắn muốn đăng xuất không?",
                                [
                                    {
                                        text: "Không",
                                        onPress: () => { },
                                        style: "cancel"
                                    },
                                    { text: "Có", onPress: () => navigation.popToTop() }
                                ]
                            );
                        }}

                    />
                </View>
            </ScrollView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={40}
                renderContent={renderContent}
            />
        </>
    );

};

export default HomeScreen

