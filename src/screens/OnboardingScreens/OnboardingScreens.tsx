import React from 'react';
import {View, Image} from 'react-native';
import styles from './OnboardingScreens.styles';

const imageOne = '../../assets/images/onboarding-1.png';
const OnboardingScreens = () => {
  return (
    <View>
      <Image source={require(imageOne)} style={styles.screenOne} />
    </View>
  );
};

export default OnboardingScreens;
