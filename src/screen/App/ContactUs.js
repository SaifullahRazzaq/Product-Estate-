import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
// import gStyle from '../styles';
import { Button, Header, Input } from '../../components';
import { Metrix } from '../../config';
import { fonts } from '../../config/Constants';
import { gStyles } from '../../styles';

export default function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const submit = () => { }

    return (
        <View style={gStyles.shadowCard}>
            <Header />
            <ScrollView style={{ paddingHorizontal: Metrix.HorizontalSize(20) }}>
                <Text style={{ ...gStyles.title, marginBottom: Metrix.VerticalSize(10) }}>Contact Us</Text>
                <Text style={{ ...gStyles.description, marginBottom: Metrix.VerticalSize(10), fontSize: Metrix.customFontSize(13) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> First Name </Text>
                    <Input
                        value={firstName}
                        onChangeText={text => setFirstName(text)}
                        placeholder={'First Name'}
                    />
                </View>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> Last Name </Text>
                    <Input
                        value={lastName}
                        onChangeText={text => setLastName(text)}
                        placeholder={'Last Name'}
                    />

                </View>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> Email Address</Text>
                    <Input
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder={'abc@example.com'}
                    />

                </View>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> Phone Number </Text>
                    <Input
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        keyboardType={'numeric'}
                        placeholder={'111-222-3333'}
                    />

                </View>

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> Subject </Text>
                    <Input
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder={'Your Subject'}
                    />

                </View>


                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>

                    <Text style={{ fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(12) }}> Message </Text>
                    <Input
                        value={message}
                        onChangeText={text => setMessage(text)}
                        multiline={true}
                        style={{ height: Metrix.VerticalSize(100), paddingTop: Metrix.VerticalSize(10) }}
                        placeholder={'Your Message'}
                    />

                </View>


                <View style={{ marginVertical: Metrix.VerticalSize(10), marginBottom: Metrix.VerticalSize(50) }}>
                    <Button
                        buttonText={'Submit'}
                        onPress={submit}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})