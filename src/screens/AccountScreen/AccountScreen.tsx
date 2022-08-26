import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import Profile from '../../components/Profile';
import Notification from '../../components/Notification';
import GeneralOverview from '../../components/GeneralOverview';
import ProfileSetting from '../../components/ProfileSetting';
import PasswordSetting from '../../components/PasswordSetting';
import SupportCenter from '../../components/SupportCenter';
import Logout from '../../components/LogOut';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const AccountScreen: FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Profile />
      <Notification />
      <GeneralOverview
        onPress={() => navigation.navigate('General Overview')}
      />
      <ProfileSetting />
      <PasswordSetting />
      <SupportCenter />
      <Logout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default AccountScreen;
