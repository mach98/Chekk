import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import styles from './MainScreen.styles';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBar}>
        <Text style={styles.profileText}>Hi, Chidera</Text>
        <View style={styles.headerStyle}>
          <Icon name="notifications-outline" size={30} />
          <ProfileAvatar />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
