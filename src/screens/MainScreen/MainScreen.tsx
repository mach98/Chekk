import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native';
import styles from './MainScreen.styles';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';

const cardImg = '../../assets/images/home.png';
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBar}>
        <Text style={styles.profileText}>Hi, Chidera</Text>
        <View style={styles.headerStyle}>
          <View style={styles.iconView}>
            <Icon name="notifications-outline" size={30} />
          </View>
          <ProfileAvatar />
        </View>
      </View>
      <View>
        <Image source={require(cardImg)} style={styles.cardImage} />
        <Text style={styles.cardText}>Your total points</Text>
      </View>
    </View>
  );
};

export default MainScreen;
