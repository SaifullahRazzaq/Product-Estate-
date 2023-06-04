import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
// import gStyle from '../styles';
import {
    Button,
    CustomModal,
    Header,
    Input,
    Card,
} from '../../components';
import { Colors, Metrix } from '../../config';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../config/Constants';
import { gStyles } from '../../styles';

export default function SavedTrailers({ route }) {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');
    const [dataSoure, setDataSource] = useState([
        {
            image: "https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
            title: "Duplex Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750
        },
        {
            image: "https://homezonline.in/wp-content/uploads/2023/04/Stylish-one-storey-house-design-.jpg",
            title: "Narcoa Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            price: 750,
            date: "month"

        },
        {
            image: "https://psgroup.in/uploads/Gallery/VYOM-Amphitheatre_gallery-image.jpg",
            title: "Passion Home Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        },
        {
            image: "https://psgroup.in/blog/wp-content/uploads/2021/02/photo-1564013799919-ab600027ffc6.jpeg",
            title: "LightHouse Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        },
        {
            image: "https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
            title: "Double Story Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        }
    ])

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const searchFilter = () => { };

    return (
        <View style={gStyles.shadowCard}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginHorizontal: Metrix.HorizontalSize(15),
                    // marginBottom: Metrix.VerticalSize(0),
                }}>
                <View style={styles.titleContainer}>
                    <View>
                        <Text
                            style={{
                                ...gStyles.text,
                                marginBottom: Metrix.VerticalSize(0),
                            }}>
                            {/* Lorem ipsum dolor sit amet consectetur adipiscing elit. */}
                        </Text>
                    </View>
                    {/* <TouchableOpacity style={styles.searchIcon} activeOpacity={0.6} onPress={()=>openModal()}>
                <EvilIcon name={'search'} size={Metrix.customFontSize(22)} color={Colors.white} />
          </TouchableOpacity> */}
                </View>

                <View style={{ marginBottom: Metrix.VerticalSize(10) }}>
                    <View style={styles.eyeIconStyle}>
                        <Ionicons
                            name={'search'}
                            color={Colors.secondary}
                            size={Metrix.customFontSize(20)}
                        />
                    </View>

                    <Input
                        value={search}
                        style={{ paddingLeft: Metrix.HorizontalSize(40) }}
                        onChangeText={text => setSearch(text)}
                        placeholder={'Search Favourites'}
                    />
                </View>

                <View style={styles.trailerListContainer}>
                    <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(14) }}>
                        All Results
                    </Text>
                    <Text
                        style={{
                            ...gStyles.text,
                            marginBottom: Metrix.VerticalSize(0),
                        }}>
                        Showing 12 of 100
                    </Text>
                </View>

                <View style={{ marginBottom: Metrix.VerticalSize(50) }}>
                    <FlatList
                        data={dataSoure}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <View style={{ margin: Metrix.VerticalSize(5), paddingTop: Metrix.VerticalSize(10) }}>
                                <Card
                                    item={item}
                                    cardStyle={{ width: Metrix.HorizontalSize(165) }}
                                    imageStyle={{ width: Metrix.HorizontalSize(165) }} />
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

                {/* modal */}

                <CustomModal show={showModal} onCloseModal={closeModal}>
                    <View style={styles.modalStyle}>
                        <View style={styles.modalTitleContainer}>
                            <Text
                                style={{
                                    ...gStyles.title,
                                    fontSize: Metrix.customFontSize(14),
                                    marginVertical: Metrix.VerticalSize(5),
                                }}>
                                Search
                            </Text>
                            <TouchableOpacity onPress={closeModal}>
                                <MaterialCommunityIcons
                                    name="close-circle"
                                    color={Colors.secondary}
                                    size={Metrix.customFontSize(26)}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => { }}
                            activeOpacity={0.7}
                            style={{ ...gStyles.selectable, ...styles.selectable }}>
                            <Text style={gStyles.selectableText}>Select Category</Text>
                            <AntDesign
                                name="caretdown"
                                color={Colors.secondary}
                                size={Metrix.customFontSize(12)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}
                            activeOpacity={0.7}
                            style={{ ...gStyles.selectable, ...styles.selectable }}>
                            <Text style={gStyles.selectableText}>Address/City/Zip Code</Text>
                            <AntDesign
                                name="caretdown"
                                color={Colors.secondary}
                                size={Metrix.customFontSize(12)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}
                            activeOpacity={0.7}
                            style={{ ...gStyles.selectable, ...styles.selectable }}>
                            <Text style={gStyles.selectableText}>State</Text>
                            <AntDesign
                                name="caretdown"
                                color={Colors.secondary}
                                size={Metrix.customFontSize(12)}
                            />
                        </TouchableOpacity>

                        <View
                            style={{
                                marginTop: Metrix.VerticalSize(10),
                                marginBottom: Metrix.VerticalSize(20),
                            }}>
                            <Button buttonText={'Search'} onPress={searchFilter} />
                        </View>
                    </View>
                </CustomModal>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchIcon: {
        paddingHorizontal: Metrix.HorizontalSize(8),
        paddingVertical: Metrix.VerticalSize(10),
        borderRadius: 12,
        backgroundColor: Colors.primary,
    },
    trailerListContainer: {
        marginTop: Metrix.VerticalSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalStyle: {
        backgroundColor: Colors.white,
        paddingHorizontal: Metrix.VerticalSize(10),
        borderRadius: 12,
    },
    modalTitleContainer: {
        marginTop: Metrix.VerticalSize(15),
        marginBottom: Metrix.VerticalSize(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eyeIconStyle: {
        position: 'absolute',
        zIndex: 100,
        top: Metrix.VerticalSize(21),
        left: Metrix.HorizontalSize(10),
    },
});