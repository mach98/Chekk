import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import styles from './LoginScreen.styles';

const LoginScreen = () => {
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
          <TouchableOpacity>
            <Text style={styles.troubleLogin}>Trouble logging in?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.redirectToRegister}>
          <Text>New here?</Text>
          <TouchableOpacity>
            <Text style={styles.signUp}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
