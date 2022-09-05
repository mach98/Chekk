import React, {useState} from 'react';

import {View, Text, Modal} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from '../../components/Button';
import PasswordResetModal from '../../components/PasswordResetModal';

import styles from './ForgotPasswordScreen.style';

const ForgotPasswordScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const changeModalVisible = (bool: boolean) => {
    setIsModalVisible(bool);
  };

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
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {/**On button press, pop up modal then on ok, redirect to Login page */}
      <Button title="Reset Password" onPress={() => changeModalVisible(true)} />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}>
        <PasswordResetModal email={email} />
      </Modal>
    </View>
  );
};

export default ForgotPasswordScreen;
