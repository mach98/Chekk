import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MainScreen.styles';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';

const cardImg = '../../assets/images/home.png';
const coinImg = '../../assets/images/coin.png';
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
        <Image source={require(coinImg)} style={styles.coinImage} />
        <Text style={styles.pointsText}>4040405040404</Text>
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemButtonText}>Redeem Points</Text>
        </TouchableOpacity>
        <View></View>
      </View>
    </View>
  );
};

export default MainScreen;
