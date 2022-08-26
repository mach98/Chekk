import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './ProfileSetting.styles';

const ProfileSetting = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="user" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>Profile Setting</Text>
          <Text>Name, email, language and more</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSetting;
