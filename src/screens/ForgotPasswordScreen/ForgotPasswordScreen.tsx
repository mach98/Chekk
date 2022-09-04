import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from '../../components/Button';

import styles from './ForgotPasswordScreen.style';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Forgot your Password</Text>
      <Text style={styles.instructionsText}>
        Enter Your Email And We Will Send You A Link To Reset Your Password
      </Text>
      <TextInput
        placeholder="Email Address"
        label={'Email Address'}
        mode="outlined"
      />
      <Button title="Reset Password" />
    </View>
  );
};

export default ForgotPasswordScreen;
