import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Metrix, NavigationService } from '../../config';
import { Button, Header, Input } from '../../components';
import { gStyles } from '../../styles';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const submit = () => {
    NavigationService.navigate('ChangePassword');
  };
  return (
    <View style={gStyles.shadowCard}>
      <Header showBack={true} title='Forgot Password' />

      <View style={{ marginTop: Metrix.VerticalSize(30) }}>
        <Text style={gStyles.title}>Forgot Password</Text>
        <Text style={gStyles.text}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut lab ore.
        </Text>
      </View>
      <View>
        <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
          <Text style={gStyles.text}> Email </Text>
          <Input
            value={email}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder={'Email'}
          />
        </View>

        <View style={{ marginTop: Metrix.VerticalSize(20) }}>
          <Button
            btnStyle={{ width: '98%' }}
            buttonText={'Submit'}
            onPress={submit}
          />
        </View>
      </View>
    </View>
    // </View>
  );
}
