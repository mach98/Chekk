import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './SupportCenter.styles';

const SupportCenter = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="customerservice" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>Support Center</Text>
          <Text>Contact our customer care center</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SupportCenter;
