import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Profile.styles';

const avatarURL = '../../assets/images/profile.jpg';

const Profile: FC = () => {
  return (
    <View style={styles.profile}>
      <Image source={require(avatarURL)} style={styles.avatar} />
      <View style={{margin: 5}}>
        <Text>Saleem Alex</Text>
        <Text>saleemalex@gmail.com</Text>
      </View>
    </View>
  );
};

export default Profile;
