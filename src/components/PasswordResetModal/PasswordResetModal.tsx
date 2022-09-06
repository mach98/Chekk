import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationNavigatorParams} from '../../navigation/AuthenticationNavigator';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PasswordResetModal.styles';

interface IPasswordReset {
  email: string;
}
const PasswordResetModal: FC<IPasswordReset> = ({email}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationNavigatorParams>>();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.modalHeader}>Password Reset</Text>
          <Text style={styles.modalText}>
            Email has been sent to {email} with a link to reset password
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('AuthenticatorNavigator', {
                screen: 'Login',
              });
            }}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PasswordResetModal;
