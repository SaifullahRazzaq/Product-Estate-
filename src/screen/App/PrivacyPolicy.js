import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Metrix } from '../../config'
import { Header } from '../../components';
import { gStyles } from '../../styles';

export default function PrivacyPolicy() {
    return (
        <View style={gStyles.shadowCard}>
            <Header />
            <ScrollView style={{ marginBottom: Metrix.VerticalSize(10), paddingHorizontal: Metrix.HorizontalSize(20), paddingTop: Metrix.VerticalSize(10) }}>
                <Text style={gStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>

                <Text style={{ ...gStyles.normalText, paddingVertical: Metrix.VerticalSize(10) }}>Heading 1</Text>
                <Text style={gStyles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                    ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Text style={{ ...gStyles.normalText, paddingVertical: Metrix.VerticalSize(10) }}>Heading 2</Text>
                <Text style={gStyles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {'\n'}{'\n'}
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Text style={{ ...gStyles.normalText, paddingVertical: Metrix.VerticalSize(10) }}>Heading 3</Text>
                <Text style={gStyles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {'\n'}{'\n'}
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>


            </ScrollView>
        </View>
    )
}