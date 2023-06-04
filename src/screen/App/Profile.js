import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import gStyle, { gStyles } from '../../styles/index';
import { Button, CustomModal, Header, Input } from '../../components';
import { Colors, Images, Metrix, NavigationService } from '../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts, ToastError } from '../../config/Constants';
import ImageCropPicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

export default function Profile() {
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [country, set_country] = useState("");
    const [city, set_city] = useState("");
    const [zip, set_zip] = useState("");
    const [about, set_about] = useState("");
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const updateProfile = () => { }

    const openPicker = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            const img = {
                name: Math.floor((Math.random() * 100)) + image?.modificationDate + Math.floor((Math.random() * 100)) + '.jpg',
                uri: image.path,
                type: 'image/jpg',
            };
            setImage(img);
            closeModal();
        }).catch(err => {
            Toast.show(ToastError(err.message));
        });
    }


    const openCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            const img = {
                name: Math.floor((Math.random() * 100)) + image?.modificationDate + Math.floor((Math.random() * 100)) + '.jpg',
                uri: image.path,
                type: 'image/jpg',
            };
            setImage(img);
            closeModal();
        }).catch(err => {
            Toast.show(ToastError(err.message));
        });
    }


    return (
        <View style={gStyles.shadowCard}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: Metrix.VerticalSize(10), paddingHorizontal: Metrix.HorizontalSize(20) }}>
                <View style={styles.userDetailContainer}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.pencileIcon} onPress={openModal}>
                            <MaterialCommunityIcons name='circle-edit-outline' size={Metrix.customFontSize(17)} color={Colors.primary} />
                        </TouchableOpacity>
                        <Image
                            source={image ? { uri: image?.uri } : Images.avatar}
                            resizeMode={'stretch'}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ marginLeft: Metrix.HorizontalSize(20) }}>
                        <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(18) }}>John Doe</Text>
                    </View>
                </View>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                        <Text style={gStyles.text}> First Name* </Text>
                        <Input
                            value={firstName}
                            onChangeText={text => setFirstName(text)}
                            placeholder={'First Name'}
                        />
                    </View>

                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> Last Name* </Text>
                        <Input
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                            placeholder={'Last Name'}
                        />

                    </View>

                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> Email* </Text>
                        <Input
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholder={'abc@example.com'}
                        />

                    </View>

                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> Phone Number* </Text>
                        <Input
                            value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)}
                            keyboardType={'numeric'}
                            placeholder={'111-222-3333'}
                        />

                    </View>

                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> Country* </Text>
                        <Input
                            value={country}
                            onChangeText={text => set_country(text)}
                            placeholder={'Canada'}
                        />

                    </View>
                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> City* </Text>
                        <Input
                            value={city}
                            onChangeText={text => set_city(text)}
                            placeholder={'City'}
                        />

                    </View>
                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> Zip* </Text>
                        <Input
                            value={zip}
                            onChangeText={text => set_zip(text)}
                            placeholder={'zip'}
                        />

                    </View>
                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                        <Text style={gStyles.text}> About You* </Text>
                        <Input
                            value={about}
                            onChangeText={text => set_about(text)}
                            placeholder={'about'}
                            style={{ height: Metrix.VerticalSize(100) }}
                        />

                    </View>

                    <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                        <Button
                            buttonText={'Update'}
                            onPress={updateProfile}
                        />
                    </View>
                    <TouchableOpacity onPress={() => NavigationService.navigate('ChangePassword')} activeOpacity={0.7} style={{ alignItems: 'flex-end' }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: Metrix.customFontSize(12), color: Colors.secondaryColorColor }}>Change Password</Text>
                    </TouchableOpacity>
                </View>



                {/* modal */}

                <CustomModal show={showModal} onCloseModal={closeModal}>
                    <View style={styles.modalStyle}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={{ ...styles.titleStyle, fontSize: Metrix.customFontSize(18) }}>Change Profile Image</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <MaterialCommunityIcons
                                    name='close-circle'
                                    color={Colors.secondaryColor}
                                    size={Metrix.customFontSize(26)}
                                />
                            </TouchableOpacity>
                        </View>
                        {
                            <View style={styles.modalBtnContainer}>
                                <View style={{ width: '48%' }}>
                                    <Button
                                        buttonText={'Open Camera'}
                                        textStyle={{ marginLeft: Metrix.HorizontalSize(5) }}
                                        btnStyle={{ width: '90%', paddingVertical: Metrix.VerticalSize(10) }}

                                        preIcon={<MaterialCommunityIcons name='camera' size={Metrix.customFontSize(18)} color={Colors.white} />}
                                        onPress={openCamera}
                                        shadow
                                    />
                                </View>
                                <View style={{ width: '48%' }}>
                                    <Button
                                        buttonText={'Open Gallery'}
                                        textStyle={{ marginLeft: Metrix.HorizontalSize(5), color: Colors.textLightColor }}
                                        preIcon={<MaterialCommunityIcons name='folder-multiple-image' size={Metrix.customFontSize(18)} color={Colors.textLightColor} />}
                                        btnStyle={{ width: '90%', paddingVertical: Metrix.VerticalSize(10), backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.textLightColor }}
                                        onPress={openPicker}
                                        shadow
                                    />
                                </View>
                            </View>
                        }
                    </View>
                </CustomModal>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    userDetailContainer: {
        flexDirection: 'row',
        marginVertical: Metrix.VerticalSize(10)
    },
    imageContainer: {
        height: Metrix.VerticalSize(70),
        width: Metrix.VerticalSize(70),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    pencileIcon: {
        position: 'absolute',
        zIndex: 100,
        right: Metrix.HorizontalSize(-10),
        bottom: Metrix.VerticalSize(-5),
        padding: Metrix.HorizontalSize(5),
        borderRadius: 100,
        backgroundColor: Colors.backgroundGray
    },
    modalStyle: {
        backgroundColor: Colors.white,
        paddingHorizontal: Metrix.VerticalSize(10),
        borderRadius: 12
    },
    modalTitleContainer: {
        marginVertical: Metrix.VerticalSize(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalBtnContainer: {
        marginTop: Metrix.VerticalSize(10),
        marginBottom: Metrix.VerticalSize(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
