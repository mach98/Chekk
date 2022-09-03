import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Screen} from 'react-native-screens';
import {AuthenticationNavigatorParams} from '../../navigation/AuthenticationNavigator';
import styles from './Onboard.styles';

interface IOnboard {
  textWriteUp: String;
}
const Onboard: FC<IOnboard> = ({textWriteUp}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationNavigatorParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.textWriteup}>{textWriteUp}</Text>

      <TouchableOpacity style={styles.linkTextTouch}>
        <Text style={styles.linkText}>Skip and Proceed to Scan</Text>
      </TouchableOpacity>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => {
            navigation.navigate('AuthenticatorNavigator', {
              screen: 'GetStarted',
            });
          }}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('AuthenticatorNavigator', {screen: 'Login'});
          }}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard;
