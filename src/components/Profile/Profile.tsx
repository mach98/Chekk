import React from 'react';
import {View, Text} from 'react-native';
import styles from './Profile.styles';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <ProfileAvatar />
      <View style={{margin: 5}}>
        <Text>Saleem Alex</Text>
        <Text>saleemalex@gmail.com</Text>
      </View>
    </View>
  );
};

export default Profile;
