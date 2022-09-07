import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationNavigatorParams} from '../../navigation/AuthenticationNavigator';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationNavigatorParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Welcome Back</Text>

      <View>
        <View style={styles.loginInputs}>
          <TextInput placeholder="Phone Number" mode="outlined" />
        </View>

        <View style={styles.loginInputs}>
          <TextInput
            secureTextEntry
            placeholder="Password"
            mode="outlined"
            right={<TextInput.Icon name="eye" />}
          />
        </View>

        <View style={styles.rememberMe}>
          <Text style={styles.rememberMeText}>Remember me next time</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AuthenticatorNavigator', {
                screen: 'ForgotPassword',
              });
            }}>
            <Text style={styles.troubleLogin}>Trouble logging in?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('MainNavigator', {
              screen: 'MainScreen',
            });
          }}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.redirectToRegister}>
          <Text>New here?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AuthenticatorNavigator', {
                screen: 'GetStarted',
              });
            }}>
            <Text style={styles.signUp}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
