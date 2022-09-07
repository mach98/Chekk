import React from 'react';
import {Image} from 'react-native';
import styles from './ProfileAvatar.styles';

const avatarURL = '../../assets/images/profile.jpg';

const ProfileAvatar = () => {
  return <Image source={require(avatarURL)} style={styles.avatar} />;
};

export default ProfileAvatar;
