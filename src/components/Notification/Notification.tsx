import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Notification.styles';

const Notification = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="notifications" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>Notification</Text>
          <Text>Turn on and off notification</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Notification;
