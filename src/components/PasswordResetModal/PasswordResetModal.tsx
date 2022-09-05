import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PasswordResetModal.styles';

interface IPasswordReset {
  email: string;
}
const PasswordResetModal: FC<IPasswordReset> = ({email}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.modalHeader}>Password Reset</Text>
          <Text style={styles.modalText}>
            Email has been sent to {email} with a link to reset password
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PasswordResetModal;
