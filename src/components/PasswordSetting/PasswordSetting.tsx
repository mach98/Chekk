import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import styles from './PasswordSetting.styles';
const PasswordSetting = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="lock" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>Password Setting</Text>
          <Text>Reset password</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PasswordSetting;
