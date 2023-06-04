import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, Metrix } from '../config';
import { useSelector } from 'react-redux';
import { Chat, Home, More, Map, List } from '../screen';
import { fonts } from '../config/Constants';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  let icons = ['Home', 'Map', 'List', 'Chat', 'more'];
  // const bookingCount = useSelector(state => state.AuthReducer?.bookingCount);
  // const messageCount = useSelector(state => state.AuthReducer?.messageCount);
  // console.log('bookingCount', bookingCount);
  return (
    <>
      <Tab.Navigator
        tabBar={props => {
          return (
            <View
              style={{
                height: Metrix.VerticalSize(70),
                paddingHorizontal: Metrix.HorizontalSize(30),
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.white,
                borderTopWidth: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
                position: 'absolute',
                bottom: 0,
                width: '100%',
                ...styles.shadow,
              }}>
              {props.state.routes.map((val, index) => (
                <TouchableOpacity
                  key={index + ''}
                  onPress={() => {
                    props.navigation.navigate(val.name);
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 45,
                    height: 45,
                    borderRadius: 70 / 2,
                  }}>
                  {icons[index] === 'Home' ? (
                    <Ionicons
                      name={
                        props.state.index == index && icons[index] === 'home'
                          ? icons[index]
                          : 'home-outline'
                      }
                      size={Metrix.customFontSize(20)}
                      color={
                        props.state.index == index
                          ? Colors.secondaryColor
                          : Colors.primaryColor
                      }
                    />
                  ) : icons[index] === 'Map' ? (
                    <View>
                      {/* {bookingCount ? ( */}
                      <View
                        style={{
                          position: 'absolute',
                          top: Metrix.VerticalSize(-5),
                          right: Metrix.HorizontalSize(-20),
                          zIndex: 2,
                          borderRadius: 12,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: Colors.red,
                          height: Metrix.HorizontalSize(10),
                          width: Metrix.HorizontalSize(10),
                        }}
                      />
                      {/* ) : null} */}
                      <FontAwesome
                        name={'map-marker'}
                        size={Metrix.customFontSize(20)}
                        color={
                          props.state.index == index
                            ? Colors.secondaryColor
                            : Colors.primaryColor
                        }
                      />
                    </View>
                  )
                    : icons[index] === 'List' ? (
                      <Ionicons
                        name={
                          props.state.index == index && icons[index] === 'List'
                            ? icons[index]
                            : 'list'
                        }
                        size={Metrix.customFontSize(20)}
                        color={
                          props.state.index == index
                            ? Colors.secondaryColor
                            : Colors.primaryColor
                        }
                      />
                    )
                      : icons[index] === 'Chat' ? (
                        <View>
                          {/* {messageCount ? ( */}
                          <View
                            style={{
                              position: 'absolute',
                              top: Metrix.VerticalSize(-5),
                              right: Metrix.HorizontalSize(-20),
                              zIndex: 2,
                              borderRadius: 12,
                              alignItems: 'center',
                              justifyContent: 'center',
                              // backgroundColor: Colors.red,
                              height: Metrix.HorizontalSize(10),
                              width: Metrix.HorizontalSize(10),
                            }}
                          />
                          {/* ) : null} */}
                          <MaterialCommunityIcons
                            name={'message-processing'}
                            size={Metrix.customFontSize(20)}
                            color={
                              props.state.index == index
                                ? Colors.secondaryColor
                                : Colors.primaryColor
                            }
                          />
                        </View>
                      ) : (
                        <MaterialCommunityIcons
                          name={'dots-horizontal'}
                          size={Metrix.customFontSize(20)}
                          color={
                            props.state.index == index
                              ? Colors.secondaryColor
                              : Colors.primaryColor
                          }
                        />
                      )}
                  <Text
                    style={{
                      fontFamily: fonts.Medium,
                      color:
                        props.state.index == index
                          ? Colors.secondaryColor
                          : Colors.primaryColor,
                      fontSize: Metrix.customFontSize(12),
                      marginTop: Metrix.VerticalSize(5),
                    }}>
                    {val.name}
                  </Text>
                  {/* {
                     props.state.index == index ? (
                     <View style={styles.activeDotStyle} />
                     ) : <Text></Text>
                 } */}
                </TouchableOpacity>
              ))}
            </View>
          );
        }}
        tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            borderTopWidth: 0,
            elevation: 0,
            ...styles.shadow,
          },
          // tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: Metrix.VerticalSize(70),
            paddingHorizontal: Metrix.HorizontalSize(5),
            paddingTop: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
            // position: 'absolute',
            borderTopWidth: 0,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          headerShown={false}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome
                  name={'home'}
                  size={25}
                  color={focused ? Colors.primaryColor : Colors.secondaryColor}
                />
              </View>
            ),
            tabBarButton: props => <CreateCustomTabButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome
                  name={'search'}
                  size={25}
                  color={focused ? Colors.primaryColor : Colors.secondaryColor}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome
                  name={'user'}
                  size={25}
                  color={focused ? Colors.primaryColor : Colors.secondaryColor}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons
                  name={'weight-lifter'}
                  size={25}
                  color={focused ? Colors.primaryColor : Colors.secondaryColor}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome
                  name={'user'}
                  size={25}
                  color={focused ? Colors.primaryColor : Colors.secondaryColor}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15.5,
    elevation: 5,
  },
  activeDotStyle: {
    padding: 3,
    borderRadius: 3,
    // backgroundColor: Colors.secondaryColor,
    marginTop: Metrix.VerticalSize(10),
  },
});

export default BottomTabs;
