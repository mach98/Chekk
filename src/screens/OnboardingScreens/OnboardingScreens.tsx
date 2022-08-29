import React from 'react';
import {View, ImageBackground} from 'react-native';
import Onboard from '../../components/Onboard';
import styles from './OnboardingScreens.styles';

const imageOne = '../../assets/images/onboarding-1.png';
const imageTwo = '../../assets/images/onboarding-2.png';
const imageThree = '../../assets/images/onboarding-3.png';

const ScreenOne = () => {
  return (
    <View>
      <ImageBackground source={require(imageOne)} style={styles.screenImage} />
      <Onboard textWriteUp="Protect yourself with Chekkit App by verifying the safety of the products before you use them" />
    </View>
  );
};

const ScreenTwo = () => {
  return (
    <View>
      <ImageBackground source={require(imageTwo)} style={styles.screenImage} />
      <Onboard textWriteUp="Scan Products &amp; Win Amazing Rewards" />
    </View>
  );
};

const ScreenThree = () => {
  return (
    <View>
      <ImageBackground
        source={require(imageThree)}
        style={styles.screenImage}
      />
      <Onboard textWriteUp="Protect yourself with Chekkit App by verifying the safety of the products before you use them" />
    </View>
  );
};

export {ScreenOne, ScreenTwo, ScreenThree};
