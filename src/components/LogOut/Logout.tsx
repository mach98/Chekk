import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Logout.styles';

const Logout = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="logout" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>Log Out</Text>
          <Text>Sign out of this account</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Logout;
