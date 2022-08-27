import React, {FC} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Onboard.styles';

interface IOnboard {
  textWriteUp: String;
}
const Onboard: FC<IOnboard> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWriteup}>{props.textWriteUp}</Text>

      <TouchableOpacity style={styles.linkTextTouch}>
        <Text style={styles.linkText}>Skip and Proceed to Scan</Text>
      </TouchableOpacity>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.getStartedBtn}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard;
